const Router = require('express');
const router = new Router();
const postController = require('../controller/post.controller');

router.get('/', postController.getOnePost)

module.exports = router