/**
 * Defines the available routes for the Solicitation component.
 *
 * @author <YOUR NAME HERE>
 */

const routes = require('express').Router()
const { endpoints } = require('./solicitation.controller')
const { asyncController } = require('../util')

/**
 * GET /solicitation/:solicitationId
 */
routes.get('/:solicitationId', asyncController(endpoints.getOne))

/**
 * GET /solicitation/
 */
routes.get('/', asyncController(endpoints.getMany))

/**
 * POST /solicitation/
 */
routes.post('/', asyncController(endpoints.create))

/**
 * PATCH /solicitation/:solicitationId
 */
routes.patch('/:solicitationId', asyncController(endpoints.update))

/**
 * DEL /solicitation/:solicitationId
 */
routes.delete('/:solicitationId', asyncController(endpoints.delete))

module.exports = routes
