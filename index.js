var express = require("express");
var cors = require('cors');

var app = express();

var bodyParser = require('body-parser').json();
app.listen(3000, () => {
 
console.log("Server running on port 3000");

});

app.use(cors());
app.use('/users/authenticate', bodyParser, function (req, res) {

if(req.method=='GET'){
let user = {id: 1, username: 'pg', firstName: 'Prakash', lastName : 'Garuda'}
var userdata= {
             id: user.id,
             username: user.username,
             firstName: user.firstName,
             lastName: user.lastName,
             token: 'fake-jwt-token'
          };   
} else {
var userdata= {
             id: req.body.id,
             username: req.body.username,
             firstName: req.body.firstName,
             lastName: req.body.lastName,
             token: 'fake-jwt-token'
          }; 
}
var data = {'code': 200, 'message': 'Log in success', 'data' : userdata}  
console.log( data );
      
res.send( JSON.stringify(data));
   


})


app.use('/authenticate',bodyParser, function (req, res) {

let data = {'code': 401, 'message': 'Unauthorized'}
console.log( data );
      
res.send( JSON.stringify(data));
   


})


app.use('/err',bodyParser, function (req, res) {

let data = {'code': 500, 'message': 'Internal Server Error'}
console.log( data );
      
res.send( JSON.stringify(data));
   


})


app.use('*', bodyParser,function(req, res){
  let data = {'code': 404, 'message': 'No service found'}
  res.send(data);
});
