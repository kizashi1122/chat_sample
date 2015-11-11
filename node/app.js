var SocketIO = require('socket.io');
var http = require('http');

var server = http.createServer(function (req, res) {
  console.log('request: ' + req);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Socket Server');
});

var io = new SocketIO(server);
server.listen(3001, function() { console.log('Server listening at port %d', 3001) });

var redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379}));

//Websocket接続を保存しておく
var connections = [];

//接続時
io.sockets.on('connect', function (ws) {
    //配列にWebSocket接続を保存
    connections.push(ws);
    //切断時
    ws.on('disconnect', function () {
        connections = connections.filter(function (conn, i) {
            return (conn === ws) ? false : true;
        });
    });
    //メッセージ送信時
    ws.on('message', function (message) {
      console.log('message:', message);
      io.sockets.emit("broadcast", {value: message});
    });
});
