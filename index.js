var express=require('express');
var login = require('./loginModel/login');
var bodyParser = require('body-parser');

var app=express();

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true ,limit: '5mb'}));

app.get('/',function(req,res)
{
res.send('Hello World!');
});
app.post('/login',(req,res)=>{
  // console.log(req.body);
  // return false;
  var data = req.body;
  login.login(data,function(response){
    res.send(response);
  });
})
var server=app.listen(3000,function() {
  console.log('Server is listening on 3000');
});
