import { RequestHandler } from "express"
import { DataStore } from "../data/data"
import { PostSummary } from "../model/shared/PostSummary"

export const apiGetPosts: RequestHandler = (req, res) => {
  res.json(DataStore.posts.map((item: any) => new PostSummary(item)))
}
