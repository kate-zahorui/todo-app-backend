import { ITodo } from '../types/todos.type';
import { Todo } from '../entities/Todo.entity';

export default class TodoService {
  async findAll() {
    const allTodos = await Todo.find();
    return allTodos as ITodo[];
  }

  async findById(id: string) {
    const todo = await Todo.findOneBy({ id });
    return todo as ITodo;
  }

  async addTodo(todo: ITodo) {
    const todoResponse = await Todo.save({ ...todo });
    return todoResponse;
  }

  async deleteTodo(id: string) {
    const response = await Todo.delete({ id });
    return response?.affected === 1 ? { message: 'Todo is deleted successfully.' } : null;
  }

  async updateById(id: string, todo: Partial<ITodo>) {
    const response = await Todo.update({ id }, todo);
    return response?.affected === 1 ? { message: 'Todo is updated successfully.' } : null;
  }
}
