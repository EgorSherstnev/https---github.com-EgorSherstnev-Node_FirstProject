const db = require('../db');
class PostController {
   async getOnePost(req, res) {
      const title = 'Post';
      const id = req.params.id
      const user = await db.query('SELECT * FROM post where id = $1', [id])
      const post = user
      res.render('post', { post, title });
   }
}

module.exports = new PostController();