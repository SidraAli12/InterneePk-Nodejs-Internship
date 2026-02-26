const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { uploadFile } = require('../controllers/uploadController');

// single file upload
router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;
