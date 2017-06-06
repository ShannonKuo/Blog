var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
//var mongodbServer = new mongodb.Server('localhost', 21017, { auto_reconnect: true, poolSize: 10});
//var db = new mongodb.Db('mydb', mongodbServer);
const url = "mongodb://admin:admin@ds163721.mlab.com:63721/2017-web-programming-hw3-database";
const assert = require('assert');
app.use(express.static(`${__dirname}/client/build/`));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3001));

let data = [];

function sendHomepage(req, res) {
  res.sendFile(__dirname + '/client/public/index.html');
}
function getPosts(req, res) {
	let post = [];
	mongodb.connect(url, (err, db) => {
		assert.equal(null, err);
		const temp = db.collection('mypost').find();
		temp.forEach((p, err) => {
		  assert.equal(null, err);
			post.push(p);
		}, () => {
		  db.close();
			res.json(post);
		});
	});

}
function getPost(req, res) {
	let post = [];
	mongodb.connect(url, (err, db) => {
		assert.equal(null, err);
		const temp = db.collection('mypost').find();
		temp.forEach((p, err) => {
		  assert.equal(null, err);
			post.push(p);
		}, () => {
		  db.close();
			res.json(post[req.params.id]);
		});
	});
};

function newPost(req, res) {
  const r = req.body;
  const d = {
    id: r.id,
		title: r.title,
    content: r.content,
  };
	mongodb.connect(url, (err, db) => {
		assert.equal(null, err);
		db.collection('mypost').insertOne(d, (err, res) => {
		  assert.equal(null, err);
			db.close();
		});
	});
}
app.get('/', sendHomepage);
app.get('/api/posts', getPosts);
app.get('/api/post/:id', getPost);
app.post('/api/addPost', newPost);

var server = app.listen(app.get('port'), () => {
  console.log('Listening on port 3001');
});
