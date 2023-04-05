'use strict'

const fastify = require('fastify')

function build(opts = {}) {
  const app = fastify(opts)

  return app
}

module.exports = build