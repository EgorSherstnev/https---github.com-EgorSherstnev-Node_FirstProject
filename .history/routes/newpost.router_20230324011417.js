const Router = require ('express');
const router = new Router;
const newpostController = require('../controller/newpost.controller');

router.get('/add-post', (req, res) => {
   const title = 'Add Post';
   res.render('add-post', { title });
 });
router.post('/',newpostController.createPost)

module.exports = router