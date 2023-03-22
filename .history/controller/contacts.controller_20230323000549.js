const db = require('../db');
const path = require('path');

class ContactsController {
   async getContact(req, res) {
      const title = 'Contacts'
      const cont = await db.query('SELECT * FROM contacts')
      const contacts = cont.rows
      res.render('contacts', {contacts, title})
   }
}

module.exports = new ContactsController()