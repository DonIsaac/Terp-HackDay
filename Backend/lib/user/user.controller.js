const bcrypt = require('bcrypt')
/**
 * Business logic and route handlers for User
 *
 * @author Donald Isaac
 */

let methods = {}

let statics = {}

/* =======
 * METHODS
 * =======
 */

methods.verifyPassword = function (password) {
  return bcrypt.compare(password, this.password)
}
/* =======
 * STATICS
 * =======
 */

// Export controllers
module.exports = { methods, statics }
