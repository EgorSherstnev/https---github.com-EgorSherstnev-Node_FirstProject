const db = require('../db');

const createPath = (page) => 
   path.resolve(__dirname, "ejs-views", `${page}.ejs`);

class ContactsController {
   async getContact(req, res) {
      const path = createPath("contacts");
      const contacts = await db.query('SELECT * FROM contacts')
      res.render(path, {contacts})
   }
}

module.exports = new ContactsController()