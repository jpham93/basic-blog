const app = require('express')(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

app.post('/blog/new', (req, res) => {
  res.json({'success' : true});
});

app.listen(3001 || process.env.PORT, ()=> {
  console.log('Server now listening');
});
