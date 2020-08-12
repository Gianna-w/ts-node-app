import { RequestHandler } from "express"
import { v4 as uuid } from "uuid"
import { DataStore } from "../data/data"
import { newPost } from "../interface/newPost"

export const apiCreatePost: RequestHandler = (req, res) => {
  const newPost: newPost = {
    id: uuid(),
    name: req.body.name || "",
    price: req.body.price || 0,
    img: [],
  }
  DataStore.posts.push(newPost)
  res.json(newPost)
}
