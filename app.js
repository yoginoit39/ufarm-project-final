require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');

const ufRoute = require('./routes/uf_route');
const gpRoute = require('./routes/gp_route');
const aoRoute = require('./routes/ao_route');
const foRoute = require('./routes/fo_route');
const authRoute = require('./routes/authRoute');
// const app_table = require('./routes/approve_status');



const app = express();
// // const PORT = process.env.PORT || 4000;

//db connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error',(error) => console.log(error));
db.once('open',() => console.log("connected to db"));


// // view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// // css
app.use(express.static(path.join(__dirname, 'public'))); 
app.use( '/public/uploads', express.static(__dirname + '/public/uploads')); 

// // middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session({
    secret: 'my secret key',
    saveUninitialized: false,
    resave: false,
}));


app.get('/', function(req,res){
    res.render('login');
});

app.use("/", aoRoute);
app.use("/", foRoute);
app.use("/", gpRoute);
app.use("/", ufRoute);
app.use("/", authRoute);
// app.use("/", app_table);



// middleware for storing messages
// app.use((req, res, next) =>{
//     res.locals.message = req.session.message;
//     delete req.session.message;
//     next();
// });


app.listen(5000,console.log(`running on port 4000`));



