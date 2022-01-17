'use strict';

/**
 * dispenser service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dispenser.dispenser');
