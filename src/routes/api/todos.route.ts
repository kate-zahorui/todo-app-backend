import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { controllerWrapper, isExist, validateBody } from '../../middlewares';
import schemas from '../../schemas/todo';
import { GetByIdTodoResponse, ITodo } from '../../types/todos.type';
import { MessageResponse } from '../../types/common.type';

const todosRouter: Router = Router();

todosRouter.get('/', controllerWrapper<ITodo[]>(todoController.getAllTodo.bind(todoController)));

todosRouter.post(
  '/',
  validateBody(schemas.addSchema),
  controllerWrapper<ITodo>(todoController.addTodo.bind(todoController))
);

todosRouter.delete(
  '/:id',
  isExist<ITodo | null>(todoController.getOneById.bind(todoController)),
  controllerWrapper<MessageResponse>(todoController.deleteTodo.bind(todoController))
);

todosRouter.put(
  '/:id',
  isExist<GetByIdTodoResponse>(todoController.getOneById.bind(todoController)),
  validateBody(schemas.updateSchema),
  controllerWrapper<MessageResponse>(todoController.updateById.bind(todoController))
);

export default todosRouter;
