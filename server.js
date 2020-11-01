var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateUser=require('./users/authenticate-users');
var registerUser=require('./users/register-users');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "public/html/register.html" );  
})  

app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "public/html/login.html" );  
})  

app.get('/register.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "public/html/register.html" );  
})  
 
/* route to handle login and registration */
app.post('/api/register',registerUser.register);
app.post('/api/authenticate',authenticateUser.authenticate);
 
console.log(authenticateUser);
app.post('/users/register-users', registerUser.register);
app.post('/users/authenticate-users', authenticateUser.authenticate);


app.listen(8080);
