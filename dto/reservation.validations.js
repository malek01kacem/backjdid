const Joi = require("joi");

const reservationValidationSchema = Joi.object({
  userId: Joi.string().required(),
  startTime: Joi.date().required(),
  endTime: Joi.date().required(),
  status: Joi.string().valid("pending", "confirmed", "cancelled"),
  terrainType: Joi.string().valid("Terre Battue", "Dure", "Gazon").required(),
});

const updateReservationValidationSchema = Joi.object({
  userId: Joi.string(),
  startTime: Joi.date(),
  endTime: Joi.date(),
  status: Joi.string().valid("pending", "confirmed", "cancelled"),
  terrainType: Joi.string().valid("Terre Battue", "Dure", "Gazon"),
});

module.exports = {
  reservationValidationSchema,
  updateReservationValidationSchema,
};
