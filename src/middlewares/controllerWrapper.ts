import { Response, Request, NextFunction } from 'express';
import { ICtrl } from '../types/common.type';

const controllerWrapper = <T>(controller: ICtrl<T>) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await controller(req);
      const status = response.status || 200;
      res.status(status).send(response.data);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

export default controllerWrapper;
