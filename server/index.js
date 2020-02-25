const app = require('express')(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  env_result = require('dotenv').config(),
  // MODELS
  Blog = require('./models/blog')
;

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));

// parsing .env file
const { DB, DB_HOST, DB_USER, DB_PASSWORD } = env_result.parsed;

// DB CREDENTIALS
const user =  DB_USER || process.env.DB_USER;
const password =  DB_PASSWORD || process.env.DB_PASSWORD;
const host = DB_HOST || process.env.HOST;
const db = DB || process.env.DB;
// concatenate credentials...
const dbUrl = `mongodb://${user}:${password}@${host}/${db}`;

// DB CONNECTION
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to DB')
}).catch(err => {
  console.log('ERROR', err.message)
});

app.post('/blog/new', (req, res) => {
  const { title, content } = req.body;
});

app.listen(3001 || process.env.PORT, ()=> {
  console.log('Server now listening');
});
