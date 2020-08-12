import { RequestHandler } from "express"
import { DataStore } from "../data/data"
import { newPost } from "../interface/newPost"

export const apiUpdatePost: RequestHandler = (req, res) => {
  const postIndex = DataStore.posts.findIndex(
    (item: any) => item.id === req.params.id
  )
  if (postIndex > -1) {
    const originalPost = DataStore.posts[postIndex]
    const updatePost: newPost = {
      id: req.params.id,
      name: req.body.name || originalPost.name,
      price: req.body.price || originalPost.price,
      img: originalPost.img,
    }
    DataStore.posts[postIndex] = updatePost
    res.status(200).json({ status: "success", message: "update successfully" })
  } else {
    res.status(404).json({ status: "failed", message: "update failed" })
  }
}
