const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(3000, (error) => {
   error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use((req, res, next) => {
   console.log(`path: ${req.path}`);
   console.log(`method: ${req.method}`);
   next();
});

app.get('/', (req, res) => {
   const title = 'Home';
   res.render(createPath('index'), { title })
});

app.get('/contacts', (req, res) => {
   const title = 'Contacts';
   const contacts = [
      { name: 'Youtube', link: 'http://youtube.com/YauhenKavalchuk' },
      { name: 'Twitter', link: 'http://twitter.com/YauhenKavalchuk' },
      { name: 'Github', link: 'http://github.com/YauhenKavalchuk' },
   ];
   res.render(createPath('contacts'), { contacts, title });
});

app.get('/posts/:id', (req, res) => {
   const title = 'Post';
   res.render(createPath('post'), { title });
});

app.get('/posts', (req, res) => {
   const title = 'Posts';
   res.render(createPath('posts'), { title });
});

app.get('/add-post', (req, res) => {
   const title = 'Add post';
   res.render(createPath('add-post'), { title });
});

app.use((req, res) => {
   const title = 'Error Page';
   res
      .status(404)
      .render(createPath('error'), { title });
});

