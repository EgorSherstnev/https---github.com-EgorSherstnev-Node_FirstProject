const db = require('../db')
class PostController {
   async getPosts(req, res) {
      const title = 'Posts'
      const pos = await db.query(`select * from post`)
      const posts = pos.rows
      res.render('posts', {posts, title})
   }
   async getOnePost(req, res) {
      const title = 'Post';
      const id = req.params.id
      const user = await db.query('SELECT * FROM post where id = $1', [id])
      const post = user.rows
      res.render('post', { post, title });
   }
}

module.exports = new PostController()