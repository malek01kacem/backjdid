// event.validation.js

const Joi = require("joi");

const eventValidationSchema = Joi.object({
  title: Joi.string().required(),
  startTime: Joi.string().required(),
  endTime: Joi.string().required(),
  description: Joi.string().required(),
  avatar: Joi.string().allow(''), // Add this line to allow the 'avatar' field

});

module.exports = eventValidationSchema;