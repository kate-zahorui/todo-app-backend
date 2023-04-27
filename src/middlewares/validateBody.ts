import { Response, Request, NextFunction } from 'express';
import Joi from 'joi';
import { RequestError } from '../helpers';

const validateBody = (schema: Joi.Schema) => {
  const func = (req: Request, _: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(RequestError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateBody;
