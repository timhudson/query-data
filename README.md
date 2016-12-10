# query-data [![build status](http://img.shields.io/travis/timhudson/query-data.svg?style=flat)](http://travis-ci.org/timhudson/query-data)

> Parse and serialize JSON data in a query parameter

## Example

### `serialize` and `parse`

``` js
const assert = require('assert')
const { serialize, parse } = require('query-data')

const query = serialize({ blam: 'pow' })
assert.equal(query, 'eyJibGFtIjoicG93In0=')

const data = parse(query)
assert.deepEqual(data, { blam: 'pow' })
```

### Parse from a `req` object

``` js
const http = require('http')
const request = require('request')
const queryData = require('./')

const server = http.createServer((req, res) => {
  const data = queryData(req)
  res.end(JSON.stringify(data))
}).listen(1515)

const query = queryData.serialize({ blam: 'pow' })

request('http://localhost:1515?data=' + query, (err, res, body) => {
  console.log(body, query)
  server.close()
})
```

## Usage

This module will parse and serialize between an object and a base64 encoded JSON string.
`{ blam: 'pow' }` becomes `'eyJibGFtIjoicG93In0='` and vice versa.

### queryData(req, param='data')

The main export returns an object parsed from the request's querystring. `param` can be used to specify
which parameter to parse. The value for this parameter should be a URI encoded, base64 encoding of a JSON string. Yeah, thats a mouthful.

### queryData.serialize(obj)

Returns a base64 encoded JSON string of the provided object

### queryData.parse(str)

Returns an object parsed from a base64 encoded JSON string

## License

MIT
