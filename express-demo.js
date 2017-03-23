var express = require("express");
var path = require("path");
var app = express();
var fs=require("fs");
var Mustache = require('Mustache')


app.get('/newaskdjfalj',function(req,res){
  var template=fs.readFileSync("new.html").toString();
  var data = {url:"http://localhost:8080/hello.html"}
  res.send(Mustache.to_html(template, data));
  //res.sendFile(path.join(__dirname, './new.html'))
});


app.listen(3000);

console.log("Running at Port 3000");