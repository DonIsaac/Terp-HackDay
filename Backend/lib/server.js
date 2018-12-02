const debug = require('debug')('tudoor:launcher')
const config = require('./config.js')
const app = require('./app')(config)

function start () {
  app.listen(app.get('port'), () => {
    debug(`Server listening on ${app.get('port')}.`)
  })
}

// In a better, non-hackathon world, this would be used :T
module.exports = start

start()
