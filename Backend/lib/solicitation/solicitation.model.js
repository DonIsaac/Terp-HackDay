/**
 * Defines the Solicitation's data structures and functionality.
 *
 * @author <YOUR NAME HERE>
 */

// Imports
const mongoose = require('mongoose')
const { Schema, model } = mongoose
const Types = Schema.Types
const controllers = require('./solicitation.controller')

/* ===============================
 * Solicitation Schema Declaration
 * ===============================
 */
const solicitationSchema = new Schema({
  student: {
    type: Types.ObjectId,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'No description'
  },
  descriptors: {
    type: [String]
  }
})

/* ====================
 * Solicitation Methods
 * ====================
 */
Object.assign(solicitationSchema.methods, controllers.methods)

/* ================
 * Solicitation Statics
 * ================
 */
Object.assign(solicitationSchema.statics, controllers.statics)

/* ==============
 * Solicitation Hooks
 * ==============
 */

/**
 * Export the newly created model
 * @type {Model}
 */
const Solicitation = module.exports = model('Solicitation', solicitationSchema)
