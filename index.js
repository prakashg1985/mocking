var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
app.get('/listUsers', function (req, res) {
var data={
'status' : '200',
'data' : {'name': 'Prakash'}
}
      console.log( data );
      res.end( JSON.stringify(data));
   
})
