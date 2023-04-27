import { Application, Request, Response } from 'express';
import todosRouter from './api/todos.route';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/todos', todosRouter);
    this.app.use((_: Request, res: Response) => {
      res.status(404).json({ message: 'Not found' });
    });
    this.app.use((err: any, _: Request, res: Response) => {
      const { status = 500, message = 'Server error' } = err;
      res.status(status).json({
        message
      });
    });
  }
}

export default AppRouter;
