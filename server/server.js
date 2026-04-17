const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to Zenvy E-commerce Backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});