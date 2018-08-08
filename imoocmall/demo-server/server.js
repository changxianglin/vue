let http = require('http')
let url = require('url')
let util = require('util')
let fs = require('fs')

let server = http.createServer((req, res) => {
  res.statusCode = 200

res.setHeader('Content-Type', 'text/plain;  charset=utf8')

let pathname = url.parse(req.url).pathname
fs.readFile(pathname.substring(1), (err, data) => {
  if(err) {
    res.writeHead(404, {
      'content-type': 'text/html'
    })
  } else {
    res.writeHead(200, {
      'content-type': 'text/html'
  })

  res.write(data.toString())
  }

  res.end()
})

})

server.listen(3000, () => {
  console.log('app run port 3000')
})
