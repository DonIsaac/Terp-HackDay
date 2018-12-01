/**
 * Application configuration file.
 */

// Set non-sensitive settings here
const config = {
  db: {
    uri: ''
  },
  server: {
    session: {
      secret: 'default secret, set secret in env file',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1.8e+7
      }
    },
    port: 8000
  }

}

// Sensitive settings will be pulled in from the .env file
require('dotenv').config()
config.secret = process.env.SECRET
config.db.uri = process.env.DB_URI

module.exports = exports = config
