var express = require('express');
var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

/*var pf = require('policyfile').createServer();

pf.listen(10843, function(){
  console.log(':3 yay')
});*/

server.listen(8000);

app.use(express.static(__dirname + '/'));
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/Startup.html');
});

io.configure(function() {
  io.set('transports', ['websocket','xhr-polling']);
  io.set('flash policy port', 10843);
  //io.set('log level', 1);
});

io.sockets.on('connection', function (socket) {
  socket.on('message', function (data) {
    console.log(data);
  });
});