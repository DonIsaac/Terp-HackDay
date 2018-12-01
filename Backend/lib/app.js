const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')// https://www.npmjs.com/package/body-parser
const compression = require('compression')// https://www.npmjs.com/package/compression
const morgan = require('morgan')
const session = require('express-session')// https://www.npmjs.com/package/express-session
const bluebird = require('bluebird')
const helmet = require('helmet')// https://www.npmjs.com/package/helmet
const passport = require('passport')// http://www.passportjs.org/
const debug = require('debug')('tudor:application')
const { errorHandler, logger } = require('./util')

// Create express application and set it as the export
module.exports = exports = function createApp (options) {
  const app = express()

  // !* Ensure global and mongoose Promises are consistent *!
  global.Promise = mongoose.Promise = bluebird

  // Connect to MongoDB
  mongoose.connect(options.db.uri, { useNewUrlParser: true }).then(
    () => { debug('Connected to MongoDB') }
  ).catch(err => {
    console.error(`Connection URI: ${options.db.uri}`)
    console.error('ERR: MongoDB connection error. Make sure MongoDB is running and the connection URI is valid.\n' + err)
    process.exit(1)
  })

  // Configure PassportJS
  require('./passport.config.js')

  /*
     * ========================================
     * Load that funky middleware white boyyyyy
     * ========================================
     */

  // HTTP Logger, only enabled if system is in development
  if (app.get('env') === 'development') {
    app.use(morgan('combined', { 'stream': logger.stream }))
  }
  app.use(helmet())
  app.use(compression())
  app.use(bodyParser.json({
    strict: true // Only accept objects and arrays
  }))
  app.use(session(options.server.session))
  app.use(passport.initialize())
  app.use(passport.session())

  app.set('port', options.server.port)

  const baseURL = '/api/v0'

  app.use(`${baseURL}/user`, require('./user').Router)
  app.use(`${baseURL}/solicit`, require('./solicitation').Router)
  app.use(`${baseURL}/offer`, require('./offer').Router)

  // Error handler middleware, should always come after all routers
  app.use(errorHandler)

  // Production flag for convenience
  Object.defineProperty(app, 'isProduction', {
    get: function () { return this.get('env') === 'production' },
    set: val => null,
    enumerable: false,
    configurable: false
  })

  // Return instantiated Express app
  return app
}
