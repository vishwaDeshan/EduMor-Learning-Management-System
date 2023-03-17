const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { upload } = require('./Utils/fileUpload');

app.use(bodyParser.json());
app.use(cors());

//import routes
app.use("/auth", require("./routes/Auth"));
app.use("/email", require("./routes/Email"));
app.use("/news", require("./routes/News"));
app.use("/advertisements", require("./routes/Advertisement"));
app.use("/vacancies", require("./routes/Vacancy"));
app.use("/examinations", require("./routes/Examination"));
app.use("/enrollment", require("./routes/Enrollment"));
app.use("/", require("./routes/Quiz"));

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
  
    res.json({ path: req.file.path });
  });

const port = process.env.PORT || 8000;
const DB_URL = 'mongodb+srv://EduMor:EduMor2k23@edumor-lms.1zyz2xw.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

mongoose.connect(DB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => console.log('DB connection eroor', err));

app.listen(port, () => {
    console.log(`Server started port on ${port}`);
});
