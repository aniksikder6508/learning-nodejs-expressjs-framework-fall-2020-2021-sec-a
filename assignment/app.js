//declaration
const express 			= require('express');	
const ejs            = require('ejs');
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 	= require('cookie-parser');
const login          = require('./controllers/login');
const admin          = require('./controllers/admin');
const reg            =require('./controllers/registration');
const customer       =require('./controllers/customer');
const app				= express();


//configuration
app.set('view engine', 'ejs');


//middleware
app.use(bodyParser.urlencoded({extended: true}));
//app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));


app.use('/login',login);
app.use('/admin',admin);
app.use('/reg',reg);
app.use('/customer',customer);

//router
app.get('/', (req, res)=>{
   res.render('home/index');
});



//server startup
app.listen(3000, (error)=>{
	console.log('server strated at 3000');
});

