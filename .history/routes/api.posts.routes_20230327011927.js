const Router = require('express')
const router = new Router();
const apipostsController = require('../controller/api.posts.controller')

router.get('/api/posts', apipostsController.getPosts)
router.post('/api/post', apipostsController.createPost)

module.exports = router