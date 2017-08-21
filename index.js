var express = require('express');
var app = express();
var fs = require('fs');
var add_data = function (line , cb){
  console.log("umesh");
  fs.appendFile("heroku.txt" , line);
  return cb(null);
};


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/pro/:id', function(request, response , err) {
  console.log("umesh--");
  var id = request.params.id;
  add_data(id, function(error){
  
  });
  
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
