import * as joi from "joi";

export const getPatientByPhoneSchema = joi.object({
  phone: joi.string().required(),
});
