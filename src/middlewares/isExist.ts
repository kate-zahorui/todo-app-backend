import { Response, Request, NextFunction } from 'express';
import { RequestError } from '../helpers';
import { ICtrl } from '../types/common.type';

const isExist = <T>(controller: ICtrl<T>) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await controller(req, res);
      if (!response?.data) {
        throw RequestError(404, 'Not found');
      }
      next();
    } catch (error) {
      next(error);
    }
  };

  return func;
};

export default isExist;
