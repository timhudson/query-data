var url = require('url')

function serialize (obj) {
  var json = JSON.stringify(obj)
  return new Buffer(json).toString('base64')
}

function parse (str) {
  var json = new Buffer(str, 'base64').toString('utf8')
  return JSON.parse(json)
}

module.exports = function (req, key) {
  key = key || 'data'

  var query = url.parse(req.url, true).query
  return parse(query[key])
}

module.exports.serialize = serialize
module.exports.parse = parse
