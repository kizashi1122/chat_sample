var SocketIO = require('socket.io');
var http = require('http');

var config = require('config');
var redis = require('socket.io-redis');
// var redisConf = { host: 'ec2-52-91-171-35.compute-1.amazonaws.com', port: 6379}
var httpConfig = config.get('http');
var redisConfig = config.get('redis.dbConfig');

var server = http.createServer(function (req, res) {
//  console.log('request: ' + req);
  console.log(req.headers['user-agent']);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Socket Server');
});

var io = new SocketIO(server);
server.listen(httpConfig.port, function() { console.log('Server listening at port %d', httpConfig.port) });

io.adapter(redis({host: redisConfig.host, port: redisConfig.port }));

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
