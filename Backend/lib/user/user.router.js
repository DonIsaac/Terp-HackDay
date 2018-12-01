/**
 * Defines the available routes for the User component.
 *
 * @author <YOUR NAME HERE>
 */

const routes = require('express').Router()
// const controllers = require('./user.controller')
const { asyncController } = require('../util')
const User = require('./user.model')

/**
 * GET /user/:userId
 */
routes.get('/:userId', asyncController(async (req, res) => {
  let user = await User.findOne(req.params.userId).exec()
  res.status(200).json(user)
}))

/**
 * POST /user/
 */
routes.post('/', asyncController(async (req, res) => {
  
}))

/**
 * PATCH /user/:userId
 */
routes.patch('/:userId', asyncController(async (req, res) => {
  
}))

/**
 * DEL /user/:userId
 */
routes.delete('/:userId', asyncController(async (req, res) => {
  
}))

module.exports = routes
