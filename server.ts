import express from "express"
import bodyParser from "body-parser"
import path from "path"
import { apiGetPosts } from "./api/apiGetPosts"
import { apiGetPostDetail } from "./api/apiGetPostDetail"
import { apiCreatePost } from "./api/apiCreatePost"
import { apiDeletePost } from "./api/apiDeletePost"
import { apiUpdatePost } from "./api/apiUpdatePost"
import { apiUploadImg } from "./api/apiUploadImg"

import e from "express"

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//配置静态路径
app.use("/static", express.static(path.resolve("./", "public", "img")))

// 自定义中间件（中间件其实就像插件，可添加多个）
const logger: express.RequestHandler = (req, res, next) => {
  console.log(`请求路径是${req.path}`)
  next()
}
// 使用自定义中间件
app.use(logger)

//routes
app.get("/", (req, res, next) => {
  res.send("node typescript...")
})
app.get("/posts", apiGetPosts)
app.get("/posts/:id", apiGetPostDetail)
app.post("/posts", apiCreatePost)
app.delete("/posts/:id", apiDeletePost)
app.put("/posts/:id", apiUpdatePost)
app.post("/posts/:id/img", apiUploadImg)

app.listen(process.env.PORT || 8081, () => {
  console.log("Server started...")
})
