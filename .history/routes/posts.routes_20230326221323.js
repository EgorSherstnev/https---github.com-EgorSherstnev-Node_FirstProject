const Router = require('express')
const router = new Router();
const postsController = require('../controller/posts.controller')

router.get('/', postsController.getPosts)
router.get('/:id', postController.getOnePost)

module.exports = router