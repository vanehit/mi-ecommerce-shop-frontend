const express  = require( 'express' );
const admin = require('firestore-admin');
const bcrypt = require('bcrypt');
const path = require('path');
const { dirname } = require('path');

//declare static path
let staticPath = path.join(__dirname, "public");

//initializing express.js
const app = express();

//middlewares
app.use(express.static(staticPath));

//routes
//home
app.get('/', (req, res) =>{
    res.sendFile(path.join(staticPath, "index.html"));
})

//404 page
app.get('/', (req, res) =>{
    res.sendFile(path.join(staticPath, "404.html"));
})

//singup page
app.get('/', (req, res) =>{
    res.sendFile(path.join(staticPath, ".html"));
})


app.listen(8080, () =>{
    console.log('server running on port 8080...')
})