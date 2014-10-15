var url = require('url')
var querystring = require('querystring')

module.exports = function(req, key) {
  key = key || 'data'
  
  var qs = querystring.parse(url.parse(req.url).query)

  return parse(decodeURIComponent(qs[key]))
}

var parse = module.exports.parse = function(str) {
  try {
    var json = new Buffer(str, 'base64').toString('utf8')
    return JSON.parse(json)
  } catch(err) {
    return
  }
}

module.exports.serialize = function(obj, options) {
  options = options || {encodeURIComponent: true}

  var json = JSON.stringify(obj)
  var buffer = new Buffer(json).toString('base64')

  return options.encodeURIComponent ? encodeURIComponent(buffer) : buffer
}
