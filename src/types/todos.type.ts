import { Request } from 'express';

export interface ITodo {
  title: string;
  description: string;
  isPrivate: boolean;
  isCompleted: boolean;
}

export interface ICtrlAddTodoRequest extends Request {
  body: ITodo;
}

export interface ICtrlUpdateTodoRequest extends Request {
  body: Partial<ITodo>;
}

export type GetByIdTodoResponse = ITodo | null;
