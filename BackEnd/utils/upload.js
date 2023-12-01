const multer = require("multer");
const path = require("path");

// const storage = multer.memoryStorage();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    const uniquiSuffix = Date.now();
    const ext = path.extname(file.originalname);
    console.log("EXT", ext);
    console.log("EXT", file);

    cb(null, file.fieldname + "-" + uniquiSuffix + ext);
  },
});
const imageUpload = multer({ storage: storage });

module.exports = { imageUpload };
