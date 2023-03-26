const Router = require('express')
const router = new Router();
const apipostsController = require('../controller/api.posts.controller')

router.get('/api/posts', apipostsController.getPosts);
router.post('/api/post', apipostsController.createPost);
router.get('/api/post/:id', apipostsController.getOnePost);
router.delete('api/post/:id', apipostsController.deletePost);
router.put('api/post/:id', apipostsController.putEditPost);

module.exports = router