/**
 * Defines the available routes for the Offer component.
 *
 * @author <YOUR NAME HERE>
 */

const routes = require('express').Router()
const { endpoints } = require('./offer.controller')
const { asyncController } = require('../util')

/**
 * GET /offer/:offerId
 */
routes.get('/:offerId', asyncController(endpoints.getOne))

/**
 * GET /offer/
 */
routes.get('/', asyncController(endpoints.getMany))

/**
 * POST /offer/
 */
routes.post('/', asyncController(endpoints.create))

/**
 * PATCH /offer/:offerId
 */
routes.patch('/:offerId', asyncController(endpoints.update))

/**
 * DEL /offer/:offerId
 */
routes.delete('/:offerId', asyncController(endpoints.delete))

module.exports = routes
