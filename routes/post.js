const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

let data = [];
router.get('/', (req, res) => {
  res.json(data);        
});

router.get('/post/:id', (req, res) => {
  res.json(data);
})
router.post('/postList', (req, res) => {
  console.log('success');        
  const r = req.body;
  const d = {
    id: r.id,
		title: r.title,
    content: r.content,
  }
  data.push(d); 
});
/*
router.post('/reply', (req, res) => {
  console.log('success');        
  const r = req.body;
  data[r.id].comments = r.comments; 
});
*/

module.exports = router;
