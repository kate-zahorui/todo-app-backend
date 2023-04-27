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
