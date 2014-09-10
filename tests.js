var test = require('tape')
var queryData = require('./')

test('parse', function(t) {
  t.plan(1)

  var data = {blam: 'pow'}
  var req = {url: 'http://localhost:1515?data=eyJibGFtIjoicG93In0%3D'}
  
  t.deepEqual(queryData(req), {blam: 'pow'})
})

test('serialize', function(t) {
  t.plan(1)

  var data = {blam: 'pow'}
  var query = queryData.serialize(data)

  t.equal(query, 'eyJibGFtIjoicG93In0%3D')
})
