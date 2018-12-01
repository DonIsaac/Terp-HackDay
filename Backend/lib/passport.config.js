// @ts-check
/**
 * Passport configuration file
 *
 * Sets up all utilities for Passport, an authentication library.
 */
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./user')

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  User.findOne({ email }).exec()
    .then(async user => {
      // User does not exist
      if (!user) {
        return done(null, false, { message: 'No user with that email exists.' })
      }

      let isCorrect = await user.verifyPassword(password)
      // Provided password is incorrect
      if (!isCorrect) {
        return done(null, false, { message: 'Incorrect password.' })
      }

      // Return user document to be serialized
      return done(null, user)
    })
    .catch(err => {
      done(err)
    })
}))
