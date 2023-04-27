export default class TodoService {
  async findAll() {
    return 'Todos';
  }

  async addTodo() {
    return 'Todo is added';
  }

  async deleteTodo(id: string) {
    return `Todo ${id} is deleted`;
  }

  async updateById(id: string) {
    return `Todo ${id} is updated`;
  }
}
