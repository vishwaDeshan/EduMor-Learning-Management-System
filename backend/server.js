const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

//import routes
const studentsRoutes = require("./routes/Student");
const vacanciesRoutes = require("./routes/Vacancy");
const advertisementsRoutes = require("./routes/Advertisement");
app.use(studentsRoutes);
app.use(vacanciesRoutes);
app.use(advertisementsRoutes);

const PORT = 8000;
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

app.listen(PORT, () => {
    console.log(`Server started port on ${PORT}`);
});
