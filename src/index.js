const http = require('http')
const { buildNewsMap, buildProjectsMap } = require('./app.service')
const { init } = require('./github.service')

init()

http
  .createServer(async (req, res) => {
    switch (req.url) {
      case '/news':
        try {
          await buildNewsMap()
          res.end()
        } catch (ex) {
          res.statusCode = ex.status || 500
          res.end()
        }
        break

      case '/projects':
        try {
          await buildProjectsMap()
          res.end()
        } catch (ex) {
          res.statusCode = ex.status || 500
          res.end()
        }
        break

      default:
        res.statusCode = 404
        res.end()
    }
  })
  .listen(1337, () => {
    console.log('server is listening')
  })
