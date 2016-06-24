var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// var socketio = require('socket.io');

// socketio.listen(8009).on('connection', function (socket) {
//   socket.on('message', function (msg) {
//     console.log('Message Received: ', msg);
//     socket.broadcast.emit('message', msg);
//   });
// });

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

var WebSocket = require('ws');

var ws = new WebSocket('ws://localhost:8080/hello', 'borf');
 var util = require('util')
ws.addListener('data', function(buf) {
  console.log('Client Got data: ' + util.inspect(buf.data));
});
ws.onmessage = function(m) {
  console.log('Client Got message: ' + util.inspect(m.data));
}
ws.addEventListener('open', function(event) {
  ws.send("ejiejie");
});
module.exports = app;
