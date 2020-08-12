import { PostSummary } from "./PostSummary"
import { Todo } from "./Todo"
export class PostDetail extends PostSummary {
  price: number
  todos: Todo
  img: string[]
  constructor(postData: any, todoData: any, postImg: string[]) {
    super(postData)
    this.price = postData.price
    this.todos = todoData.map((item: any) => new Todo(item))
    this.img = postImg
  }
}
