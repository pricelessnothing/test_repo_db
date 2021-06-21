const http = require('http')
const { buildProjectMaps } = require('./app.service')
const { init } = require('./github.service')

init()

http
  .createServer(async (req, res) => {
    switch (req.url) {
      case '/projects':
        try {
          await buildProjectMaps()
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
