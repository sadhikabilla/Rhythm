var express = require('express');
var app = express();


app.use(express.static('.'));

app.listen(8888, function(){
  console.log("Server Started");
});
