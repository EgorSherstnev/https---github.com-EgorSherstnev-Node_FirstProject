const Router = require('express')
const router = new Router();
const postController = require('../controller/posts.controller')

router.get('/', postController.getPosts)
router.get('/:id', postController.getOnePost)

module.exports = router