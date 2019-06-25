var express = require("express");
var app = express();
var orderfunction=function(req,res)
{
  console.log("\nYou are experiencing express js views")		;
  var orders=
 [
	{id:1,name:"a",quantity:100},
	{id:2,name:"b",quantity:200},
	{id:3,name:"c",quantity:300},
	{id:4,name:"d",quantity:400},
	{id:5,name:"e",quantity:500},
 ];
 res.send(orders);
};
app.get('/orders',orderfunction);
var server = app.listen(8088,function()
{
	var host = server.address().address;
	var port = server.address().port;
	console.log("You are listening on http:localhost:8088/orders",host,port);
});