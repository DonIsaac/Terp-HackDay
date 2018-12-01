// @ts-check
/**
 * Defines the available routes for the User component.
 *
 * @author Donald Isaac
 */
const Boom = require('boom')
const passport = require('passport')
const routes = require('express').Router()
// const controllers = require('./user.controller')
const { asyncController, asyncParam } = require('../util')
const User = require('./user.model')
const isValid = require('mongoose').Types.ObjectId.isValid

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
  let user = await User.findById(req.params.userId).exec()
  res.status(200).json(user)
}))

/**
 * POST /user/
 */
routes.post('/', asyncController(async (req, res) => {
  let user = await User.create(req.body)
  res.status(200).json(user.id)
}))

/**
 * PATCH /user/:userId
 */
routes.patch('/:userId', asyncController(async (req, res) => {
  let user = await User.findById(req.params.userId).exec()
  user.set(req.body)
  await user.save()
  res.status(204).end()
  // This does not trigger validators and pre-save middleware; deprecated for now
  // await User.findByIdAndUpdate(req.params.userId, req.body, { runValidators: true }).exec()
  // res.status(204).end()
}))

/**
 * DEL /user/:userId
 */
routes.delete('/:userId', asyncController(async (req, res) => {
  await User.findByIdAndDelete(req.params.userId).exec()
  res.status(204).end()
}))

/**
 * POST /user/:userId/session
 * 
 * Signs a user in.
 */
routes.post('/:userId/session', passport.authenticate('local'), asyncController(async (req, res) => {
  res.status(204).end()
}))

/**
 * DEL /user/:userId/session
 * 
 * Signs a user out.
 */
routes.delete('/:userId/session', asyncController(async (req, res) => {
  res.status(204).end()
}))

module.exports = routes
