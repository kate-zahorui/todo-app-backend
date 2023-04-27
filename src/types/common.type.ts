import { Response, Request, NextFunction } from 'express';

export interface ICtrlReturn<T> {
  data: T;
  status?: number;
}

export type ICtrl<T> = (
  req: Request,
  res?: Response,
  next?: NextFunction
) => Promise<ICtrlReturn<T>>;

export type MessageResponse = { message: string };
