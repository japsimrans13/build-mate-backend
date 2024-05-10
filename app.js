require('dotenv').config();
const express = require('express');
const cors = require('cors');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const registerRoutes = require('./routes/registerRoutes');
const userRoutes = require('./routes/userRoutes');
const ownerRoutes = require('./routes/ownerRoutes');
const staffRoutes = require('./routes/staffRoutes');
const taskRoutes = require('./routes/taskRoutes');
const clientRoutes = require('./routes/clientRoutes');
const projectRoutes = require('./routes/projectRoutes.js');
const testRoutes = require('./routes/testRoutes');
const { authMiddleware } = require('./middlewares/authMiddleware');

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true,createIndexes: true, useFindAndModify: false})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect to MongoDB', err));


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


// Routes
app.use('/api/register', registerRoutes);
app.use('/api/user', userRoutes);
app.use('/api/owner', authMiddleware, ownerRoutes);
app.use('/api/staff', authMiddleware, staffRoutes);
app.use('/api/client', authMiddleware, clientRoutes);
// TODO: check routes below
app.use('/api/project', authMiddleware, projectRoutes);
app.use('/api/task', authMiddleware, taskRoutes);



app.use('/test', testRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Export app for unit testing
module.exports = app;
  