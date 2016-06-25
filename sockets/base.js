module.exports = function (io) { // io stuff here... io.on('conection..... }
  io.on('connection', function (socket) {
    socket.on('message', function (msg) {
      console.log('Socket IO Message Received: ', msg);
      setTimeout(function(){
        socket.emit('message', msg);
      }, 1000)

    });
    socket.emit("message", "welcome");
  });
}