let user = require('./User')

console.log(`userName: ${user.userName}`)

console.log(`userSay: ${user.sayHello()}`)


let http = require('http')
let url = require('url')
let util = require('util')

let server = http.createServer((req, res) => {
  res.statusCode = 200

  res.setHeader('Content-Type', 'text/plain;  charset=utf8')

  let content = util.inspect(url.parse(req.url))

  res.end(content)
})

server.listen(3000, () => {
  console.log('app run port 3000')
})
