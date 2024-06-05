import { Request, Response, NextFunction, response } from "express";
import { ObjectSchema } from "joi";
import { BadRequestError } from "@/infra/helpers/Errors";
import { HttpStatusCode } from "@/infra/helpers/HttpStatusCode";
import { responseErrorFormatter } from "@/infra/helpers/ErrorHandling";
import { decodeFromBase64 } from "@/infra/helpers/SecurityHelper";

/**
 * Validates the request using the given schema and key.
 *
 * @return {Function} - A middleware function that validates the request calls the next middleware function if successful.
 */
const validatePayload = (schema: ObjectSchema, key: "body" | "params") => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[key]);

    if (error) {
      const message = "Invalid payload";

      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ message, error: error.message });
    }

    next();
  };
};

// Validate the body of the request
export const validateBody = (schema: ObjectSchema) =>
  validatePayload(schema, "body");

// Validate the parameters of the request
export const validateParams = (schema: ObjectSchema) =>
  validatePayload(schema, "params");

/**
 * Validate if the authorization token is sent in the request headers.
 *
 * @return {void} If the request is authenticated, calls the next middleware function.
 * If the request is not authenticated, returns a response with an error message and status code.
 */
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    const message = new BadRequestError("Missing authorization header");

    return res
      .status(HttpStatusCode.UNAUTHORIZED)
      .json(responseErrorFormatter(message));
  }

  const token = req.headers.authorization.split(" ")[1];
  const user: any = decodeFromBase64(token);

  if (!user) {
    const message = new BadRequestError("Invalid token");

    return res
      .status(HttpStatusCode.UNAUTHORIZED)
      .json(responseErrorFormatter(message));
  }

  next();
};
