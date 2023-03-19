const db = require('../db')
class PostController {
   async createPost(req, res) {
      const {content, title, user_name} = req.body
      const newPost = await db.query(`INSERT INTO post (content, title, user_name) values ($1, $2, $3) RETURNING *`, [content, title,  user_name])
      res.json(newPost.rows[0])
   }
   async getPostsByUser(req, res) {
      const id = req.query.id
      const posts = await db.query(`select * from post where user_id = $1`, [id])
      res.json(posts.rows)
   }
}

module.exports = new PostController()