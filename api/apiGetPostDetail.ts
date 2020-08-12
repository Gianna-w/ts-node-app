import { RequestHandler } from "express"
import { DataStore } from "../data/data"
import { PostDetail } from "../model/shared/PostDetail"

export const apiGetPostDetail: RequestHandler = (req, res) => {
  const currentEnv = req.app.get("env") // 当前环境
  const id = req.params.id
  const item = DataStore.posts.find((data) => data.id === id)
  if (item) {
    const imgUrl = item.img.map((p: string) => {
      if (currentEnv === "development") {
        return "http://localhost:8081/static/" + p
      } else {
        return "http://producturl/static" + p
      }
    })
    const selectedTodods = DataStore.todos.filter((i: any) => i.postId === id)
    res.json(new PostDetail(item, selectedTodods, imgUrl)) // 通过PostSummary类规范类型
  } else {
    res.status(404).json({ status: "failed", message: "not fount id" })
  }
}
