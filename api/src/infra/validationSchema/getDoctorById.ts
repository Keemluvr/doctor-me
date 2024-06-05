import * as joi from "joi";

export const getDoctorByIdSchema = joi.object({
  id: joi.number().required(),
});
