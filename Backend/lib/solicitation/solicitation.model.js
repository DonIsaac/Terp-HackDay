/**
 * Defines the Solicitation's data structures and functionality.
 * 
 * @author <YOUR NAME HERE>
 */

 // Imports
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Types = Schema.Types;
const controllers = require('./solicitation.controller');

/* ===========================
 * Solicitation Schema Declaration
 * ===========================
 */
const solicitationSchema = new Schema({

});

/* ================
 * Solicitation Methods
 * ================
 */
Object.assign(solicitationSchema.methods, controllers.methods);

/* ================
 * Solicitation Statics
 * ================
 */
Object.assign(solicitationSchema.statics, controller.statics);

/* ==============
 * Solicitation Hooks
 * ==============
 */

/**
 * Export the newly created model
 * @type {Model}
 */
const Solicitation = module.exports = model('Solicitation', solicitationSchema);
