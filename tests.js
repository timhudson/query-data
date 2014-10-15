var test = require('tape')
var queryData = require('./')

test('parse request', function(t) {
  t.plan(1)

  var req = {url: 'http://localhost:1515?data=eyJibGFtIjoicG93In0%3D'}
  t.deepEqual(queryData(req), {blam: 'pow'})
})

test('parse string', function(t) {
  t.plan(1)
  t.deepEqual(queryData.parse('eyJibGFtIjoicG93In0='), {blam: 'pow'})
})

test('serialize', function(t) {
  t.plan(2)

  var data = {blam: 'pow'}

  var query = queryData.serialize(data)
  t.equal(query, 'eyJibGFtIjoicG93In0%3D')

  var query = queryData.serialize(data, {encodeURIComponent: false})
  t.equal(query, 'eyJibGFtIjoicG93In0=')
})
