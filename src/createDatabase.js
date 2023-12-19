const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
const dotenv=require("dotenv");

// configuration of env
dotenv.config();

// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URI || "mongodb://127.0.0.1:27017/subscribers";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({});
    //delete all previous data
    await subscriberModel.insertMany(data);
    // insert new data
    await mongoose.disconnect();
    // disconnect connection
}
refreshAll();