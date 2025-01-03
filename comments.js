// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = [];

// Use body-parser for parsing request body
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// Start server
const port = 4001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
