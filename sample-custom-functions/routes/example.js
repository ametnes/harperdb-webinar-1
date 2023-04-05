'use strict';

const filter = require('../helpers/filter');

module.exports = async (server, { hdbCore, logger }) => {
  server.route({
    url: '/',
    method: 'GET',
    handler: async (request) => {
      request.body = {
       operation: 'sql',
       sql: 'SELECT name FROM movies.directors ORDER BY name'
      };
      const response = await hdbCore.requestWithoutAuthentication(request);
      return filter(response);
    }
  });
};
