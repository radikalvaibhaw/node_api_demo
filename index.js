var express=require('express');
var login = require('./loginModel/login');
var bodyParser = require('body-parser');

var app=express();
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({extended: true,limit: '50mb', parameterLimit:50000}));
app.use(cookieParser());

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(allowCrossDomain);
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
