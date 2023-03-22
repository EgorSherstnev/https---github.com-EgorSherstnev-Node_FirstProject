const db = require('../db');
class ContactsController {
   async getContact(req, res) {
      const contacts = await db.query('SELECT * FROM public.contacts')
      res.json(contacts)
   }
}

module.exports = new ContactsController()