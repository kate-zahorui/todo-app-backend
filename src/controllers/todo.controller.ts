import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo() {
    const todos = await this.todoService.findAll();
    return { data: todos };
  }

  async addTodo() {
    const newTodo = await this.todoService.findAll();
    return { data: newTodo, status: 201 };
  }

  async deleteTodo() {
    const removedTodo = await this.todoService.findAll();
    return { data: removedTodo };
  }

  async updateById() {
    const updatedTodo = await this.todoService.findAll();
    return { data: updatedTodo };
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
