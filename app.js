require('dotenv').config();
const express = require('express');
const cors = require('cors');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const ownerRoutes = require('./routes/ownerRoutes');

// middlewares
const { ownerAuthMiddleware } = require('./middlewares/authMiddleware');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(cors());

app.use(cors({
  "origin": "https://build-mate.in/",
}));

app.use('/api/auth', authRoutes);
app.use('/api/owner', ownerAuthMiddleware, ownerRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true,createIndexes: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect to MongoDB', err));

// Export app for unit testing
module.exports = app;
  