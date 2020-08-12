import { RequestHandler } from "express"
import { DataStore } from "../data/data"
import { newPost } from "../interface/newPost"

export const apiDeletePost: RequestHandler = (req, res) => {
  const postIndex = DataStore.posts.findIndex(
    (item: any) => item.id === req.params.id
  )
  if (postIndex > -1) {
    DataStore.posts.splice(postIndex, 1)
    res.status(200).json({ status: "success", message: "delete successfully" })
  } else {
    res.status(404).json({ status: "failed", message: "delete failed" })
  }
}
