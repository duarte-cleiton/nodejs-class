console.log(__filename)
console.log(__dirname)

const url = "http://mylooget.io/log"

function log(message) {
  //Sends an HTTP request
  console.log(message)
}

module.exports = log
