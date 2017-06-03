var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var post = require('./routes/post');

app.use(express.static(`${__dirname}/client/build/`));
app.use(bodyParser.json());
app.use('/', index);
app.use('/post', post);

app.set('port', (process.env.PORT || 3001));
var server = app.listen(app.get('port'), () => {
  console.log('Listening on port 3001');
});
