import { Request } from 'express';
import TodoService from '../services/todo.service';
import { RequestError } from '../helpers';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo() {
    const todos = await this.todoService.findAll();
    return { data: todos };
  }

  async addTodo() {
    const newTodo = await this.todoService.addTodo(); // req.body;
    return { data: newTodo, status: 201 };
  }

  async deleteTodo(req: Request) {
    const { id } = req.params;
    const removedTodo = await this.todoService.deleteTodo(id);
    if (!removedTodo) {
      throw RequestError(404, 'Not found');
    }
    return { data: removedTodo };
  }

  async updateById(req: Request) {
    const { id } = req.params;
    const updatedTodo = await this.todoService.updateById(id); // req.body
    if (!updatedTodo) {
      throw RequestError(404, 'Not found');
    }
    return { data: updatedTodo };
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
