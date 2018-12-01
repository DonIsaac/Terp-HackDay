/**
 * Defines the available routes for the User component.
 * 
 * @author <YOUR NAME HERE>
 */

const routes = require('express').Router();
const { endpoints } = require('./user.controller');
const { asyncController } = require('../util/async.decorators');

/**
 * GET /user/:userId
 */
routes.get('/:userId', asyncController(endpoints.getOne));

/**
 * GET /user/
 */
routes.get('/', asyncController(endpoints.getMany));

/**
 * POST /user/
 */
routes.post('/', asyncController(endpoints.create));

/**
 * PATCH /user/:userId
 */
routes.patch('/:userId', asyncController(endpoints.update));

/**
 * DEL /user/:userId
 */
routes.delete('/:userId', asyncController(endpoints.delete));

module.exports = routes;