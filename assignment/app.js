//declaration
const express 			= require('express');	
const ejs               = require('ejs');
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
const login				= require('./controllers/login');
const home				= require('./controllers/home');
const logout			= require('./controllers/logout');
const app				= express();


//configuration
app.set('view engine', 'ejs');


//middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));


app.use('/login', login);
app.use('/home', home);
app.use('/logout', logout);

//router
app.get('/', (req, res)=>{
   res.render('open/index');
});



//server startup
app.listen(3000, (error)=>{
	console.log('server strated at 3000');
});

