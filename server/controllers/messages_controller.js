let messages = []
let id = 0

module.exports = {
  create: (req, res, next) => {
    const { text, time } = req.body
    let newMessage = {
      text: text,
      time: time,
      id: id
    }
    messages.push(newMessage)
    id++
    res.status(200).json(messages)
  },
  read: (req, res, next) => {
    // console.log("hello")
    res.status(200).json(messages)
  },
  update: (req, res, next) => {
    const { text } = req.body
    const newId = req.params.id
    const index = messages.findIndex(message => {
      message.id === newId
    })
    message[index] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    }
    res.status(200).send(messages)
  },
  deleteMessage: (req, res, next) => {
    index = messages.findIndex(message => message.id === req.params.id)
    messages.splice(index, 1)
    res.status(200).json(messages)
  }
}
