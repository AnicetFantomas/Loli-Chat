const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use(cors());    
app.use(express.json());

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error); 
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

const server = app.listen(5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

connect();