/**
 * Defines the User's data structures and functionality.
 *
 * @author Donald Isaac
 */

// Imports
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const controllers = require('./user.controller')

const saltRounds = 10
const { Schema, model } = mongoose

/* ===========================
 * User Schema Declaration
 * ===========================
 */
const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'An email account is required.'],
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: [true, 'A password is required.']
  },
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

userSchema.pre('save', async function () {
  if (this.isModified('password')) { // If the password is changed, encrypt it
    this.password = await bcrypt.hash(this.password, saltRounds)
  }
})
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
