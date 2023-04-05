'use strict';

const diffHelper = require('../helpers/diff')

module.exports = async (server, { hdbCore, logger }) => {
  server.route({
    url: '/',
    method: 'POST',
    handler: async (request) => {
      // Get the diff of the two arrays passed in the original body
      const diff = diffHelper(request.body.before, request.body.after)

      // Submit a request to obtain a "value" from the database
      request.body = {
        operation: 'sql',
        sql: 'SELECT * FROM orders WHERE id = 1'
      }
      const response = await hdbCore.requestWithoutAuthentication()

      // Return the response
      return {
        valueFromDb: response.customerId,
        diff
      }
    }
  })
}
