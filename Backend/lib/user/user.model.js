/**
 * Defines the User's data structures and functionality.
 *
 * @author Donald Isaac
 */

// Imports
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const { Schema, model } = mongoose
const controllers = require('./user.controller')

/* ===========================
 * User Schema Declaration
 * ===========================
 */
const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'You must include an email account.'],
    unique: true
  },
  password: String,
  name: String,
  major: String,
  canTeach: [String]
})

/* ================
 * User Methods
 * ================
 */
Object.assign(userSchema.methods, controllers.methods)

/* ================
 * User Statics
 * ================
 */
Object.assign(userSchema.statics, controllers.statics)

/* ==============
 * User Hooks
 * ==============
 */

/* =========================
 * User Validation Functions
 * =========================
 */

userSchema.plugin(uniqueValidator, 'A unique value is required')
/**
 * Export the newly created model
 * @type {Model}
 */
const User = module.exports = model('User', userSchema)
