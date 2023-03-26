const db = require('../db');
class EditController {
   async getEditPost (req,res) {
      const title = 'Edit Post';
      const id = req.params.id
      const user = await db.query('SELECT * FROM post where id = $1', [id])
      const post = user.rows[0]
      res.render('edit-post', { post, title });
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

module.exports = new EditController();