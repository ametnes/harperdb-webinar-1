const { randomUUID } = require('crypto')
const { test } = require('tap')
const sinon = require('sinon')

const build = require('../app')
const logger = require('../utils/logger')

test('requests the "/" route', async t => {
  const app = build()

  // Setup stub
  const id = randomUUID()
  const callback = sinon.stub().returns({ customerId: id })

  // Setup hdbCore stub object
  const hdbCore = {
    requestWithoutAuthentication: () => callback()
  }

  // Register the route file
  app.register(require('../../custom_functions/routes/example'), { hdbCore, logger })

  // Send the request
  const response = await app.inject({
    method: 'POST',
    url: '/',
    body: {
      before: ['a', 'b'],
      after: ['a']
    }
  })

  // Ensure it returns a 200
  t.equal(response.statusCode, 200, 'and returns a status code of 200')

  // Ensure it returns the correct response
  t.strictSame(
    JSON.parse(response.body),
    {
      valueFromDb: id,
      diff: ['b']
    },
    'and returns the correct response'
  )
})
