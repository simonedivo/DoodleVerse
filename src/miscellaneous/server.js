const express = require('express');
const fs = require('fs');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
	cb(null, '../../images');
  },
  filename: function (req, file, cb) {
	cb(null, file.fieldname + '-' + Date.now() + '.json');
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('imageJson'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});