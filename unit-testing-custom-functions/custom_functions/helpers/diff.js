const { diff } = require('radash')

const diffHelper = (before, after) => diff(before, after)

module.exports = diffHelper
