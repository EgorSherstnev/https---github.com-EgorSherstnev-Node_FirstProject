const db = require('../db');
class PostsController {
   async getPosts(req, res) {
      const title = 'Posts'
      const pos = await db.query(`select * from post`)
      const posts = pos.rows
      res.render('posts', {posts, title})
   }
   async createPost(req, res) {
      const {title, author, text} = req.body
      const newPost = await db.query(`INSERT INTO post (title, author, text) values ($1, $2, $3) RETURNING *`, [title, author, text])
   }
   async getOnePost(req, res) {
      const title = 'Post';
      const id = req.params.id
      const user = await db.query('SELECT * FROM post where id = $1', [id])
      const post = user.rows[0]
      res.render('post', { post, title });
   }
   async deletePost(req, res) {
      const id = req.params.id
      const user = await db.query('DELETE FROM post where id = $1', [id])
      const post = user.rows[0]
      res.render('post', { post, title });
   }
}

module.exports = new PostsController()