const express = require('express');
const router = express.Router();

const {generateAndSendCertificate} = require('../controllers/certificateController');

router.post('/generate', generateAndSendCertificate);

module.exports = router;
