const url = require('url')

function serialize (obj) {
  const json = JSON.stringify(obj)
  return new Buffer(json).toString('base64')
}

function parse (str) {
  const json = new Buffer(str, 'base64').toString('utf8')
  return JSON.parse(json)
}

module.exports = function (req, key) {
  key = key || 'data'

  const query = url.parse(req.url, true).query
  return parse(query[key])
}

module.exports.serialize = serialize
module.exports.parse = parse
