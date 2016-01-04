var test = require('tape');
var start = require('../lib/start.js');
var server = require('../lib/index.js');

test('simple server running', function(t) {
  var options = {
    method: "GET",
    url: "/"
  };

  server.inject(options, function(response) {
    t.equal(response.statusCode, 200, '200 status code returned');
    server.stop(t.end);
  });
});

test('public served', function(t) {
  var options = {
    method: "GET",
    url: "/index.html"
  };

  server.inject(options, function(response) {
    t.equal(response.statusCode, 200, '200 status code returned');
    server.stop(t.end);
  });
});
