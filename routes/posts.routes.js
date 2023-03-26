const Router = require('express')
const router = new Router();
const postsController = require('../controller/posts.controller')

router.get('/', postsController.getPosts)

module.exports = router