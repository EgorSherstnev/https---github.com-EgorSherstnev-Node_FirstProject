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
      
   }
}

module.exports = new EditController();