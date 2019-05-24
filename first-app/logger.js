const EventEmitter = require("events")

const url = "http://mylooget.io/log"

class Logger extends EventEmitter {
  log(message) {
    //Sends an HTTP request
    console.log(message)
    // Raise an event
    this.emit("messageLogged", { id: 1, url })
  }
}

module.exports = Logger
