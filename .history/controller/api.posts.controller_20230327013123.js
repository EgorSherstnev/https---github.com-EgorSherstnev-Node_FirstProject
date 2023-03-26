const db = require('../db');

class apiPostsController {
   async getPosts(req, res) {
      const pos = await db.query(`select * from post`)
      res.status(200).json(pos.rows)
   }
   async createPost(req, res) {
      const {title, author, text} = req.body
      const newPost = await db.query(`INSERT INTO post (title, author, text) values ($1, $2, $3) RETURNING *`, [title, author, text])

   }
   async getOnePost(req, res) {
      const id = req.params.id
      const post = await db.query('SELECT * FROM post where id = $1', [id])
      res.status(200).json(post.rows[0])
   }
   async deletePost(req, res) {
      const id = req.params.id
      const user = await db.query('DELETE FROM post where id = $1', [id])
      res.status(200).json(req.params.id)
   }
   async putEditPost(req,res) {
      const { title, author, text } = req.body;
      const { id } = req.params;
      const user = await db.query(
         'UPDATE post set title = $1, author = $2, text = $3 where id = $4 RETURNING *', 
         [title, author, text, id]
      )
      const post = user.rows[0]
      res.redirect(`/posts/${id}`);
   }
}

module.exports = new apiPostsController()