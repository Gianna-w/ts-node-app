import { RequestHandler } from "express"
import { DataStore } from "../data/data"
import { getFileUploader } from "../general/static"

export const apiUploadImg: RequestHandler = (req, res) => {
  const postIndex = DataStore.posts.findIndex(
    (item: any) => item.id === req.params.id
  )
  if (postIndex > -1) {
    const upload = getFileUploader(req.app.get("env"))
    upload(req, res, (err: any) => {
      if (err) {
        console.log(err)
        res
          .status(404)
          .json({ status: "failed", message: "upload file failed" })
      } else {
        DataStore.posts[postIndex].img.push(req.file.filename) //这里的filename是经过multer处理之后的
        res
          .status(200)
          .json({ status: "success", message: "upload file successfully" })
      }
    })
  } else {
    res.status(404).json({ status: "failed", message: "post not found" })
  }
}
