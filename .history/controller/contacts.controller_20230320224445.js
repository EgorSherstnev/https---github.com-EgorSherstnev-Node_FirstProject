const db = require('../db');
const path = require('path');
class ContactsController {
   async getContact(req, res) {
      const id = req.query.id
      const contacts = await db.query(`select * from contacts where id = $1`, [id])
      res.render()
   }
}

module.exports = new ContactsController()

posts.rows