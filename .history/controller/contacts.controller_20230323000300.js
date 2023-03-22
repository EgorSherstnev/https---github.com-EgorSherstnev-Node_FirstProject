const db = require('../db');
const path = require('path');

const createPath = (page) => path.resolve("ejs-views", `${page}.ejs`);

class ContactsController {
   async getContact(req, res) {
      const title = 'Contacts'
      const contacts = await db.query('SELECT * FROM contacts')
      const cont = contacts.rows
      res.render('contacts', {cont, title})
   }
}

module.exports = new ContactsController()