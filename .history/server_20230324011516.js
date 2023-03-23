const express = require('express');
const path = require('path');
const morgan = require('morgan');
const postRouter = require('./routes/post.routes');
const contactRouter = require('./routes/contacts.router');
const newpostRouter = require('./routes/newpost.router')


const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(3000, (error) => {
   error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('styles'));

app.get('/', (req, res) => {
   const title = 'Home';
   res.render('index', { title })
});

app.use('/contacts', contactRouter);

app.use('/posts', postRouter);

app.get('/add-post', (req, res) => {
   const title = 'Add Post';
   res.render('add-post', { title });
 });

app.use('/add-post', newpostRouter);

app.use((req, res) => {
   const title = 'Error Page';
   res
      .status(404)
      .render('error', { title });
});

