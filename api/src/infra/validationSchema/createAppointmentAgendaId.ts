import * as joi from "joi";

export const createAppointmentAgendaIdSchema = joi.object({
  agendaId: joi.number().required(),
});
