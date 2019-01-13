var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app=express()

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub');

var db = mongoose.connection;

host = '127.0.0.1';
port = 8081;

app.get('/', function(req,res){
	console.log("GET request received");
	res.end("Hello World!");
 })

app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

app.get('/emp', function(req,res){
	fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err,data){
		console.log(data);
		res.end(data);
	});
 })

app.post('/add', function(req,res){
	console.log("POST got");
	fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err,data){
		data = JSON.parse( data );
	        data["emp4"] = req.body;
	        console.log( data );
	        res.end( JSON.stringify(data));
   });
})

var server=app.listen(8081, function(){
	//var host = server.address().address
	//var port = server.address().port
   	console.log("Example app listening at http://%s:%s", host, port)
})
