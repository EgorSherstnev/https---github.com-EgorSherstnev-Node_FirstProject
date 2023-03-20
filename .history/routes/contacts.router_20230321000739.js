const Router = require('express');
const router = new Router;
const contactController = require('../controller/contacts.controller');

router.get('/contacts', (req, res) => {
   const title = "Contacts";
   contactController
      .getContact
});

module.exports = router;
