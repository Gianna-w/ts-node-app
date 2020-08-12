export class Todo {
  postId: string
  todoText: string
  constructor(todoData: any) {
    this.postId = todoData.postId
    this.todoText = todoData.todoText
  }
}
