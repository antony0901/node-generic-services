const Joi = require('joi');

const schema = Joi.object().keys({
  id: Joi.number().required().error(new Error('REQUIRED')),
  name: Joi.string().required().error(new Error('REQUIRED')),
  grade: Joi.number().required().error(new Error('REQUIRED')),
});

module.exports = schema;
