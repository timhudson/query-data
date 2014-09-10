var http = require('http')
var request = require('request')
var queryData = require('./')

var server = http.createServer(function(req, res) {
  var data = queryData(req)
  res.end(JSON.stringify(data))
}).listen(1515)

var query = queryData.serialize({blam: 'pow'})

request('http://localhost:1515?data=' + query, function(err, res, body) {
  console.log(body, query)
  server.close()
})
