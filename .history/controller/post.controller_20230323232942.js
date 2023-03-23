const db = require('../db')
class PostController {
   async createPost(req, res) {
      const {title, author, text} = req.body
      const newPost = await db.query(`INSERT INTO post (title, author, text) values ($1, $2, $3) RETURNING *`, [title, author, text])
      res.json(newPost.rows[0])
      const posts = newPost.rows
      res.render('posts', {contacts, title})
   }
   async getPostsByUser(req, res) {
      const id = req.query.id
      const posts = await db.query(`select * from post where user_id = $1`, [id])
      res.json(posts.rows)
   }
}

module.exports = new PostController()