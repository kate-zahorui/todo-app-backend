import Joi from 'joi';

const addSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  isPrivate: Joi.boolean(),
  isCompleted: Joi.boolean()
});

const updateSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  isPrivate: Joi.boolean(),
  isCompleted: Joi.boolean()
});

const schemas = {
  addSchema,
  updateSchema
};

export default schemas;
