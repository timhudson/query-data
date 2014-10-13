var url = require('url')
var querystring = require('querystring')

module.exports = function(req, key) {
  key = key || 'data'
  
  var qs = querystring.parse(url.parse(req.url).query)

  try {
    var json = new Buffer(decodeURIComponent(qs[key]) || '', 'base64').toString('utf8')
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
