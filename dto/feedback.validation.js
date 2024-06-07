const Joi = require("joi");

const eventValidationSchema = Joi.object({
  title: Joi.string().required(),
  chat: Joi.array().items(Joi.string()),
  isExpired: Joi.boolean().default(false),
  startTime: Joi.string().required(),
  description: Joi.string().required(),
  endTime: Joi.string().required(),
  participants: Joi.array().items(Joi.string()),
  avatar: Joi.string().allow(''), // Add this line to allow the 'avatar' field


});

module.exports = eventValidationSchema;