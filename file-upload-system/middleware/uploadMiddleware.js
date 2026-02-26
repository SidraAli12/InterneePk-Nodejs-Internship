const multer = require('multer');
const path = require('path');

// 1️⃣ Storage config (temporary local storage)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // uploads folder
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname); //this func used for nameduplication 
    cb(null, uniqueName);
  }
});

// 2️⃣ File type validation
const fileFilter = (req, file, cb) => { //Resume & projects ke liye security
  const allowedTypes = /pdf|doc|png|docx|zip/;
  const extName = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  if (extName) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF, DOC, DOCX, ZIP files allowed'));
  }
};

// 3️⃣ Multer instance
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter
});

module.exports = upload;
 //Multer kya karta hai?
// File receive + validate + temporary save