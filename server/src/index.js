const express = require("express");
const cors = require('cors');
const corsOptions = require("./utils/corsOptions");
const connectDB = require("./config/dbConn");

require('dotenv').config(corsOptions);

const app = express();
const PORT = process.env.PORT || 5000;

// DB connection
connectDB();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));

// routes
app.use('/v1/api', require('./routes/authRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})