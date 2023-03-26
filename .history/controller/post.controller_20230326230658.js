const db = require('../db');
class PostController {
   async getOnePost(req, res) {
      const title = 'Post';
      const id = req.params.id
      const user = await db.query('SELECT * FROM post where id = $1', [id])
      const post = user.rows[0]
      //res.send(post)
      res.render('post', { post, title });
   }
   async deletePost(req, res) {
      const id = req.params.id
      const user = await db.query('DELETE FROM person where id = $1', [id])
      res.json(user.rows[0])
   }
}

module.exports = new PostController();