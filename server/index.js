const express = require("express")
const { json } = require("body-parser")
const controller = require("./controllers/messages_controller")
const app = express()

app.use(json())

app.get("/api/messages", controller.read)
app.post("/api/messages/:id", controller.create)
app.put("/app/messages/:id", controller.update)
app.delete("/app/messages/:id", controller.deleteMessage)

app.listen(3001, () => {
  console.log("im listening on port 3001")
})
