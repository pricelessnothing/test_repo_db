const http = require('http')

http
  .createServer((req, res) => {
    switch (req.url) {
      case '/projects':
        break
      default:
        res.statusCode = 404
        res.end()
    }
  })
  .listen(1337, () => {
    console.log('server is listening')
  })
