module.exports = function (app, host, port, user, password) { // io stuff here... io.on('conection..... }
  var WebSocket = require('ws');

  var ws = new WebSocket("ws://"+host+":"+port+"/ari/events?api_key="+user+":"+password+"&app=hello-world");
  var util = require('util')
  ws.addListener('data', function(buf) {
    app.io.sockets.emit("message", buff.data); // TODO broadcast to a channel.
    console.log('ARI Client Got data: ' + util.inspect(buf.data));
  });
  ws.onmessage = function(m) {
    console.log('ARI Client Got message: ' + util.inspect(m.data));
  }
  ws.addEventListener('open', function(event) {
    ws.send("ejiejie");
  });
}