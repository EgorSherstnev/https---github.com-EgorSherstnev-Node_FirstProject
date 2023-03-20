const db = require('../db');
class ContactsController {
   async getContact(req, res) {
      const id = req.query.id
      const posts = await db.query(`select * from post where user_id = $1`, [id])
      res.json(posts.rows)
   }
}

module.exports = new ContactsController()