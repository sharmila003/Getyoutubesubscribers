const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const dotenv = require("dotenv")

//configuring env
dotenv.config();


// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Connect to DATABASE
const DATABASE_URL ="mongodb+srv://sharmila055:FZO90QTf2gXoMZTu@subscribers.r9cwb6z.mongodb.net/subscribers?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
