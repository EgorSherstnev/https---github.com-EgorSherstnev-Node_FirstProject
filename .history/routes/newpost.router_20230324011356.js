const Router = require ('express');
const router = new Router;
const newpostController = require('../controller/newpost.controller');

router.get('/',)
router.post('/',newpostController.createPost)

module.exports = router