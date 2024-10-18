require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000; // Reads port from .env or defaults to 5000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Resume Schema
const resumeSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    education: String,
    experience: String
});

const Resume = mongoose.model('Resume', resumeSchema);

// Save resume route
app.post('/api/resume', async (req, res) => {
    const { name, email, phone, education, experience } = req.body;
    const newResume = new Resume({ name, email, phone, education, experience });

    try {
        await newResume.save();
        res.status(201).send('Resume saved successfully!');
    } catch (error) {
        res.status(500).send('Error saving resume: ' + error.message);
    }
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Resume Builder API');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
