var express = require('express'); //dependecies
var path = require('path');//dependencies
var app = express();//exposing express
var server = require('http').Server(app);//setting up a server
var io = require('socket.io')(server);//declaring socket.io
var port = 8080;//declaring port

app.use(express.static(path.join(__dirname,"public")));//making connection to express static folder and passing in a path 

io.on('connection', function(socket){
	console.log('New connection extablished');

	socket.emit('message-from-server', {
		greeting: 'Hello from server!'
	});//emmiting message from server

	socket.on('message-from-client', function(msg){
		console.log(msg);
	});//listening event for messages from client
}); //opening up a connection

server.listen(port, function(){//listening
	console.log('Listening on port ' + port);
});//listening to a server