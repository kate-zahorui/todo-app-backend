import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo() {
    const todos = await this.todoService.findAll();
    return { data: todos };
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
