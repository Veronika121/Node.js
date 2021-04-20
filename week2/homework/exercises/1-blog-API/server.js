const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});
app.post('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.end('ok');
});

app.put('/posts/:title', (req, res) => {
  const title = req.params.title;
  const content = req.body.content;
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok');
  } else {
    res.status(404);
    res.send('This post does not exist!');
  }
});

app.delete('/blogs/:title', (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    res.status(404);
    res.send('This post does not exist!');
  }
});

app.get('/blogs/:title', (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    res.send(post);
  } else {
    res.status(404);
    res.send('This post does not exist!');
  }
});

app.get('/blogs', (req, res) => {
  const cont = fs.readdirSync(path.dirname(__filename));
  res.send(cont);
});

app.listen(3000);
