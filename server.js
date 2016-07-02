var exp = require("express");

var app = exp();

app.use(exp.static(__dirname + "/public"));

app.get("/hello", function(req, res){
	res.send("You called hello");
});


var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server is ON at " + port);
});