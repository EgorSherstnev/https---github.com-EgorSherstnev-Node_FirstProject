const db = require('../db');
class ContactsController {
   async getContact(req, res) {
      const contacts = await db.query('SELECT * FROM contacts')
      res.render(createPath('contacts'), {contacts, title})
   }
}

module.exports = new ContactsController()