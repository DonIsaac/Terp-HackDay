/**
 * Defines the Offer's data structures and functionality.
 *
 * @author <YOUR NAME HERE>
 */

// Imports
const mongoose = require('mongoose')
const { Schema, model } = mongoose
const Types = Schema.Types
const controllers = require('./offer.controller')

/* ===========================
 * Offer Schema Declaration
 * ===========================
 */
const offerSchema = new Schema({

})

/* ================
 * Offer Methods
 * ================
 */
Object.assign(offerSchema.methods, controllers.methods)

/* ================
 * Offer Statics
 * ================
 */
Object.assign(offerSchema.statics, controllers.statics)

/* ==============
 * Offer Hooks
 * ==============
 */

/**
 * Export the newly created model
 * @type {Model}
 */
const Offer = module.exports = model('Offer', offerSchema)
