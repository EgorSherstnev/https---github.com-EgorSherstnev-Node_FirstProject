const express = require('express');
const path = require('path');
const morgan = require('morgan');
const 

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
   const post = {
      id: '1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum ut dolor a ullamcorper. Sed eu metus eget nibh consequat sollicitudin sed ac augue. Donec interdum aliquam nunc sed pretium. Integer id pulvinar neque. Fusce nisl magna, eleifend non tortor vel, accumsan rhoncus mauris. Vestibulum dignissim pellentesque malesuada. Nam pellentesque vehicula turpis, dictum aliquet elit euismod quis. Praesent consequat ante dapibus lorem ullamcorper consequat.Vivamus leo lacus, convallis at elementum ut, aliquam ut dui. Vivamus justo mi, sagittis mattis semper vitae, varius a mauris. Ut et eros ac lorem condimentum placerat ac vel metus. Phasellus tincidunt nulla ut laoreet ullamcorper. Phasellus felis massa, aliquet vitae tristique ac, pretium quis mauris. Morbi sollicitudin faucibus velit id tristique. Duis vulputate finibus nisi non fringilla. Etiam ultricies id lectus et ultrices. Nulla a turpis justo.Sed ut ultrices dolor. Mauris ac diam feugiat, fermentum purus interdum, auctor nulla. Donec nisl orci, placerat in turpis ut, vehicula scelerisque eros. Vivamus consequat auctor dolor, a laoreet libero eleifend a. Aliquam erat volutpat. Aliquam dapibus rhoncus vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin eu ex nec turpis finibus elementum eu sit amet diam. Sed sapien erat, consequat sed vehicula ut, faucibus ut lacus. Mauris fringilla leo sed condimentum maximus. Vivamus egestas lobortis arcu, aliquam fermentum elit mollis in. Vestibulum sem lectus, fermentum id pulvinar vitae, tristique sit amet turpis.In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam luctus vel orci quis dignissim. Nullam sagittis, ante ut faucibus semper, sapien justo ultrices nulla, id gravida nisi lorem ut velit. Praesent eget ultricies lacus. Aliquam ac tellus egestas, sagittis nunc eget, faucibus augue. In erat nunc, hendrerit ac congue eget, accumsan sit amet lacus. Integer non lectus lacinia, pretium sapien a, pretium velit. Curabitur eget ipsum condimentum, laoreet arcu sit amet, ornare ipsum. Fusce imperdiet faucibus velit, quis rutrum risus lobortis eget. Mauris ullamcorper tellus porta justo venenatis, a hendrerit justo vehicula. Maecenas gravida, metus accumsan euismod tempus, felis erat sodales ex, eget rhoncus purus justo commodo leo. Fusce luctus placerat mauris nec ultricies. Ut sem purus, imperdiet eget mauris sed, vehicula porta orci.Praesent aliquam auctor nulla nec egestas. In dictum, ante sed ultrices pretium, lectus libero congue mi, sed dignissim leo nunc sed eros. Maecenas non est at mauris malesuada molestie eget vel nibh. In at pellentesque neque, at commodo risus. Nunc et pharetra nisl. Aenean aliquam ex a lectus cursus pretium. Maecenas iaculis magna ante, quis ultricies diam ornare in. Nunc in nunc in ex tempor varius eget eu dui. Praesent quis gravida tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget est dictum, cursus nisi id, tempor dolor. Praesent dapibus et felis in dictum. Quisque feugiat ultrices nunc, vel interdum lorem. Sed dictum pellentesque est, at rutrum neque pellentesque vitae. Morbi a ex libero.',
      title: 'Post title',
      date: '05.05.2025',
      author: 'Svarli',
   };
   res.render(createPath('post'), { title, post });
});

app.get('/posts', (req, res) => {
   const title = 'Posts';
   const posts = [
      {
         id: '1',
         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum ut dolor a ullamcorper. Sed eu metus eget nibh consequat sollicitudin sed ac augue. Donec interdum aliquam nunc sed pretium. Integer id pulvinar neque. Fusce nisl magna, eleifend non tortor vel, accumsan rhoncus mauris. Vestibulum dignissim pellentesque malesuada. Nam pellentesque vehicula turpis, dictum aliquet elit euismod quis. Praesent consequat ante dapibus lorem ullamcorper consequat.Vivamus leo lacus, convallis at elementum ut, aliquam ut dui. Vivamus justo mi, sagittis mattis semper vitae, varius a mauris. Ut et eros ac lorem condimentum placerat ac vel metus. Phasellus tincidunt nulla ut laoreet ullamcorper. Phasellus felis massa, aliquet vitae tristique ac, pretium quis mauris. Morbi sollicitudin faucibus velit id tristique. Duis vulputate finibus nisi non fringilla. Etiam ultricies id lectus et ultrices. Nulla a turpis justo.Sed ut ultrices dolor. Mauris ac diam feugiat, fermentum purus interdum, auctor nulla. Donec nisl orci, placerat in turpis ut, vehicula scelerisque eros. Vivamus consequat auctor dolor, a laoreet libero eleifend a. Aliquam erat volutpat. Aliquam dapibus rhoncus vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin eu ex nec turpis finibus elementum eu sit amet diam. Sed sapien erat, consequat sed vehicula ut, faucibus ut lacus. Mauris fringilla leo sed condimentum maximus. Vivamus egestas lobortis arcu, aliquam fermentum elit mollis in. Vestibulum sem lectus, fermentum id pulvinar vitae, tristique sit amet turpis.In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam luctus vel orci quis dignissim. Nullam sagittis, ante ut faucibus semper, sapien justo ultrices nulla, id gravida nisi lorem ut velit. Praesent eget ultricies lacus. Aliquam ac tellus egestas, sagittis nunc eget, faucibus augue. In erat nunc, hendrerit ac congue eget, accumsan sit amet lacus. Integer non lectus lacinia, pretium sapien a, pretium velit. Curabitur eget ipsum condimentum, laoreet arcu sit amet, ornare ipsum. Fusce imperdiet faucibus velit, quis rutrum risus lobortis eget. Mauris ullamcorper tellus porta justo venenatis, a hendrerit justo vehicula. Maecenas gravida, metus accumsan euismod tempus, felis erat sodales ex, eget rhoncus purus justo commodo leo. Fusce luctus placerat mauris nec ultricies. Ut sem purus, imperdiet eget mauris sed, vehicula porta orci.Praesent aliquam auctor nulla nec egestas. In dictum, ante sed ultrices pretium, lectus libero congue mi, sed dignissim leo nunc sed eros. Maecenas non est at mauris malesuada molestie eget vel nibh. In at pellentesque neque, at commodo risus. Nunc et pharetra nisl. Aenean aliquam ex a lectus cursus pretium. Maecenas iaculis magna ante, quis ultricies diam ornare in. Nunc in nunc in ex tempor varius eget eu dui. Praesent quis gravida tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget est dictum, cursus nisi id, tempor dolor. Praesent dapibus et felis in dictum. Quisque feugiat ultrices nunc, vel interdum lorem. Sed dictum pellentesque est, at rutrum neque pellentesque vitae. Morbi a ex libero.',
         title: 'Post title',
         date: '05.05.2025',
         author: 'Svarli',
      },
   ]
   res.render(createPath('posts'), { title, posts });
});

app.post('/add-post', (req, res) => {
   const { title, author, text} = req.body;
   const post = {
      id: new Date(),
      date: (new Date()).toLocaleDateString(),
      title,
      author,
      text,
   };
   res.render(createPath('post'), { post, title }) ;
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

