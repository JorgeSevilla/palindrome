// For make connections 

const express = require('express');
const bodyParser = require('body-parser');
const palindrome = require('./palindrome');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

// Routes for connect and show

app.post('/palindrome', (req, res) => {
  const startPalindrome = palindrome(req.body.sentence);

  if (startPalindrome)
	 return res.sendStatus(200);
  return res.sendStatus(400);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
