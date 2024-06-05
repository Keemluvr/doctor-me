import * as joi from "joi";

export const createPatientPatientIdSchema = joi.object({
  patientId: joi.number().required(),
});
