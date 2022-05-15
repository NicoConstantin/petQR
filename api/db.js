const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { mongoURL } = require ("./src/config/config.js")
const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });


async function connectDB() {
    try {
        await client.connect();
        await mongoose.connect(mongoURL);
        console.log("Connected correctly to MongoDB");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

module.exports = {
    connectDB
}