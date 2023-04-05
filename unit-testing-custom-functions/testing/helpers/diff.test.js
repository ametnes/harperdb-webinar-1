const { test } = require('tap')

const diffHelper = require('../../custom_functions/helpers/diff')

test('diffHelper correctly diffs two arrays', async t => {
  t.strictSame(
    diffHelper(['a', 'b'], ['a']),
    ['b'],
    'Should return the correct value'
  )
})
