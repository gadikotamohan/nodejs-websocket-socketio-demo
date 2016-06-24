var http = require('http');
var socketio = require('socket.io');
var server1 = http.createServer();

socketio.listen(server1).on('connection', function (socket) {
  socket.on('message', function (msg) {
    console.log('Socket IO Message Received: ', msg);
    setTimeout(function(){
      socket.emit('message', msg);
    }, 1000)

  });
  socket.emit("message", "welcome");
});

server1.listen(8081, function () { console.log('SocketIO listening on ' + server1.address().port) });