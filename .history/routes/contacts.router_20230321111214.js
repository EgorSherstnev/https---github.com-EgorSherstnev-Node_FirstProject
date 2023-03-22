const Router = require('express');
const router = new Router;
const contactsController = require('../controller/contacts.controller');

router.get('/contacts', contactsController.getContact);

module.exports = router;