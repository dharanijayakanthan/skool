var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

mongoose.Promise = global.Promise;﻿


app.use(express.static(__dirname +'/public'));
app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api',appRoutes);
//mongodb connection mongodb://127.0.0.1:27017
mongoose.connect('mongodb://skolladmins:admin@ds149724.mlab.com:49724/skoll',function(err){
if(err){
  console.log("error connecting to db" +err);
}
else{
  console.log("successfully connected to mongo db");
}})

//routing to index.html
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});


//starting server in port
app.listen(port,function(){
  console.log("server created " +port);
})
