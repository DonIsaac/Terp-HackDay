// @ts-check
/**
 * Defines the available routes for the User component.
 *
 * @author Donald Isaac
 */

const routes = require('express').Router()
// const controllers = require('./user.controller')
const { asyncController, asyncParam } = require('../util')
const User = require('./user.model')
const isValid = require('mongoose').Types.ObjectId.isValid
const Boom = require('boom')

routes.param('userId', asyncParam(async (req, res, next, userId) => {
  if (!isValid(userId)) {
    throw Boom.badRequest('The provided user id is not valid.')
  }
  next()
}))
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
  await User.create(req.body)
  res.status(204).json()
}))

/**
 * PATCH /user/:userId
 */
routes.patch('/:userId', asyncController(async (req, res) => {
  await User.findByIdAndUpdate(req.params.userId, req.body, { runValidators: true }).exec()
  res.status(204).json()
}))

/**
 * DEL /user/:userId
 */
routes.delete('/:userId', asyncController(async (req, res) => {
  await User.findByIdAndDelete(req.params.userId).exec()
  res.status(204).end()
}))

module.exports = routes
