// server.js
const express = require('express');
const mongoose = require('mongoose');
// import express from 'express';
// import mongoose from 'mongoose';
//import cors from './middleware/cors.js';
import signupHandler from './api/signup.js';
import loginHandler from './api/login.js';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
// app.use(cors);

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.post('/api/signup', signupHandler);
app.post('/api/login', loginHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
