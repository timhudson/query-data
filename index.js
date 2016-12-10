const url = require('url')

const serialize = (obj) => {
  const json = JSON.stringify(obj)
  return new Buffer(json).toString('base64')
}

const parse = (str) => {
  const json = new Buffer(str, 'base64').toString('utf8')
  return JSON.parse(json)
}

module.exports = (req, key) => {
  key = key || 'data'

  const query = url.parse(req.url, true).query
  return parse(query[key])
}

module.exports.serialize = serialize
module.exports.parse = parse
