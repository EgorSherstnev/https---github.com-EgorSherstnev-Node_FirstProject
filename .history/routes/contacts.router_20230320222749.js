const Router = require('express');
const router = new Router;
const contactController = require('../controller/contacts.controller');

router.get('/contacts', contactController.getContact);

module.exports = router;