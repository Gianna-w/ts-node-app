import { RequestHandler } from "express"
import { v4 as uuid } from "uuid"
import multer from "multer"
import path from "path"
export const getFileUploader = (env: string): RequestHandler => {
  switch (env) {
    case "development":
      const fileId = uuid()
      const fileStorage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, path.resolve("./", "public", "img"))
        },
        filename: function (req, file, cb) {
          cb(null, fileId + path.extname(file.originalname))
        },
      })
      return multer({ storage: fileStorage }).single("file")
    case "production":
      return (req, res, next) => next()
    default:
      return (req, res, next) => next()
  }
}
