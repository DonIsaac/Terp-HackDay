/**
 * Defines the User's data structures and functionality.
 * 
 * @author <YOUR NAME HERE>
 */

 // Imports
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Types = Schema.Types;
const controllers = require('./user.controller');

/* ===========================
 * User Schema Declaration
 * ===========================
 */
const userSchema = new Schema({

});

/* ================
 * User Methods
 * ================
 */
Object.assign(userSchema.methods, controllers.methods);

/* ================
 * User Statics
 * ================
 */
Object.assign(userSchema.statics, controller.statics);

/* ==============
 * User Hooks
 * ==============
 */

/**
 * Export the newly created model
 * @type {Model}
 */
const User = module.exports = model('User', userSchema);
