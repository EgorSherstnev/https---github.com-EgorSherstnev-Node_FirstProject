const Router = require('express');
const router = new Router();
const editController = require('../controller/editpost.controller');

router.get('/:id', editController.getEditPost);
router.put('/:id', )

module.exports = router;