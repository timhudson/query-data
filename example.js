const assert = require('assert')
const { serialize, parse } = require('./')

const query = serialize({ blam: 'pow' })
assert.equal(query, 'eyJibGFtIjoicG93In0=')

const data = parse(query)
assert.deepEqual(data, { blam: 'pow' })
