const db = require('../db')
class PostController {
   async createPost(req, res) {
      const {title, author, text} = req.body
      const newPost = await db.query(`INSERT INTO post (title, author, text) values ($1, $2, $3) RETURNING *`, [title, author, text])
   }
   async getPostsByUser(req, res) {
      const id = req.query.id
      const pos = await db.query(`select * from post where user_id = $1`, [id])
      const posts = pos.rows
      res.render('posts', {posts, title})
   }
}

module.exports = new PostController()