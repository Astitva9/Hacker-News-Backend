const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const uri = process.env.MONGODBURI;

        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

        console.log("Mongoose db connected");

    } catch (err) {
        console.error(`MongoDB Error: ${err.message}`);

        process.exit(1);
    }
}

module.exports = connectDB;