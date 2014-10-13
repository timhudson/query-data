# query-data

Parse and serialize JSON data in a query parameter

[![build status](http://img.shields.io/travis/timhudson/query-data.svg?style=flat)](http://travis-ci.org/timhudson/query-data)

## Example

``` js
var http = require('http')
var request = require('request')
var queryData = require('query-data')

var server = http.createServer(function(req, res) {
  var data = queryData(req)
  res.end(JSON.stringify(data))
}).listen(1515)

var query = queryData.serialize({blam: 'pow'})

request('http://localhost:1515?data=' + query, function(err, res, body) {
  console.log(body, query) // {"blam":"pow"} eyJibGFtIjoicG93In0%3D
  server.close()
})
```

## Usage

This module will parse and serialize between an object and a URI encoded, base64 encoding of a JSON string.
`{blam: 'pow'}` becomes `'eyJibGFtIjoicG93In0%3D'` and vice versa.

### queryData(req, param='data')

Return an object parsed from the request's querystring. `param` can be used to specify
which parameter to parse. The value for this parameter should be a URI encoded, base64 encoding of a JSON string.

### queryData.serialize(obj, options)

Return a URI encoded, base64 encoded, JSON string of the provided object.
Pass `{encodeURIComponent: false}` if you do not want the string encoded.
This option is useful when passing the serialized output to modules
that handle the encoded for you, i.e. [superagent](http://visionmedia.github.io/superagent/#query-strings).

``` js
var data = {blam: 'pow'}

queryData.serialize(data) // eyJibGFtIjoicG93In0%3D
queryData.serialize(data, {encodeURIComponent: false}) // eyJibGFtIjoicG93In0=
```

## License

MIT
