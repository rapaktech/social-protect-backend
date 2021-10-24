const express = require('express');

const router = express.Router();

const controller = require('../controllers/controllers');

router.get('/facebook', controller.getFacebook);

router.get('/instagram', controller.getInstagram);

router.get('/twitter', controller.getTwitter);

router.get('/whatsapp', controller.getWhatsApp);

module.exports = router;