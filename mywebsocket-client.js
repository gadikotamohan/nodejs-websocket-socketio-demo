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
