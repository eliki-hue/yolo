require('dotenv').config();

var config = {};

// Use environment variables to store sensitive credentials
config.mongoURI = {
    production: process.env.MONGO_URI,
    
};

module.exports = config;
