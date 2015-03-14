
var http = require('http');
var path = require('path');
var async = require('async');
var socketio = require('socket.io');
var express = require('express');
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);
var mydata =[];
router.use(express.static(path.resolve(__dirname, 'client')));

io.sockets.on('connection', function (socket) {
  socket.on('hello',function(data){
    mydata.push(data);
    socket.emit('back',mydata);
    socket.broadcast.emit('back',mydata);
  });
});
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("bob", addr.address + ":" + addr.port);
});
