const app = require('express')(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  env_result = require('dotenv').config(),
  cors = require('cors'),
  // MODELS
  Blog = require('./models/blog')
;

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

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
  // Extract payload
  const { title, content } = req.body;

  // Create new document in Blog collection
  Blog.create({title, content}, (err, newBlog) => {

    if (err) {
      console.log(err, ', cannot create new blog!');
      res.json({'error': 'Error creating new blog in the database.'});
    } else {
      res.json({'success': 'New blog successfully created!'});
    }

  });

});

app.listen(3000 || process.env.PORT, ()=> {
  console.log('Server now listening');
});
