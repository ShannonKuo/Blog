var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(express.static(`${__dirname}/client/build/`));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3001));

let data = [];

function sendHomepage(req, res) {
  res.sendFile(__dirname + '/client/public/index.html');
}
function getPosts(req, res) {
  res.json(data);
}
function getPost(req, res) {
  res.json(data[req.params.id]);
}
function newPost(req, res) {
  console.log('success');        
  const r = req.body;
  const d = {
    id: r.id,
		title: r.title,
    content: r.content,
  };
  data.push(d); 
 
}
app.get('/', sendHomepage);
app.get('/api/posts', getPosts);
app.get('/api/post/:id', getPost);
app.post('/api/addPost', newPost);

var server = app.listen(app.get('port'), () => {
  console.log('Listening on port 3001');
});
