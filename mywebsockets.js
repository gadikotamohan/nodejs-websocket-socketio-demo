
var http = require('http');
var server = http.createServer();

var url = require('url')
  , WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ path: "/hello", server: server })

wss.on('connection', function connection(ws) {
  var location = url.parse(ws.upgradeReq.url, true);
  // you might use location.query.access_token to authenticate or share sessions
  // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message, {mask: true});
  });
  ws.send("Welcome");
});



var url = require('url')
  , WebSocketServer = require('ws').Server
  , wss2 = new WebSocketServer({ path: "/hello2", server: server })

wss2.on('connection', function connection(ws) {
  var location = url.parse(ws.upgradeReq.url, true);
  // you might use location.query.access_token to authenticate or share sessions
  // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('Websocket received: %s', message);
    ws.send(message, {mask: true});
  });
  ws.send("Welcome");
});
server.listen(8080, function () { console.log('Websockets listening on ' + server.address().port) });
