const express = require('express');
const app = express();
const mongoose = require('mongoose');



const PORT = process.env.PORT || 3000;


// =======================================
//              GLOBAL CONFIG
// =======================================
// const db = mongoose.connection;
//
//
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ 'projectTracker';
//
//
//
// // Connect to Mongo
// mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
// db.once('open', ()=>{
//   console.log('Connected to Mongo');
// })
//
// // =======================================
// //             ERROR/SUCCESS MESSAGES
// // =======================================
// db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
// db.on('disconnected', () => console.log('mongo disconnected'));



// =======================================
//              MIDDLEWARE
// =======================================

app.use(express.json());
app.use(express.urlencoded({extended:false}));


// =======================================
//              STATIC
// =======================================
app.use(express.static('public'));



// =======================================
//              CONTROLLERS
// =======================================
const projectController = require('./controllers/projects.js')
app.use('/projects', projectController);






app.listen(PORT, () => {
  console.log('projectTracker app listening on port: '+ PORT)
});
