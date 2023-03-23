const Router = require('express')
const router = new Router();
const postController = require('../controller/post.controller')

router.post('/', postController.createPost)
router.get('/', postController.getPosts)
router.get('/:id', postController.getOnePost)

module.exports = router