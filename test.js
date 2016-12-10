const test = require('ava')
const queryData = require('./')

test('parse request', (t) => {
  const expected = { blam: 'pow' }
  const result = queryData({
    url: 'http://localhost:1515?data=eyJibGFtIjoicG93In0%3D'
  })
  t.deepEqual(result, expected)
})

test('parse(str)', (t) => {
  const expected = { blam: 'pow' }
  const result = queryData.parse('eyJibGFtIjoicG93In0=')
  t.deepEqual(result, expected)
})

test('serialize(str)', (t) => {
  const expected = 'eyJibGFtIjoicG93In0='
  const result = queryData.serialize({ blam: 'pow' })
  t.is(result, expected)
})
