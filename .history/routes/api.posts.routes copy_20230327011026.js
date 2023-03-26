const Router = require('express')
const router = new Router();
const postsController = require('../controller/posts.controller')

router.get('/api/posts', postsController.getPosts)

module.exports = router