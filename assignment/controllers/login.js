const express   =   require('express');
//const {body,validationResult}      = require('express-validator');
const adminModel=require.main.require('./models/adminModel');

const router    =   express.Router();

router.get('/',(req,res)=>{
    res.render('login/index');
    req.session.errors="";
    //res.send('Hello admin');
});
router.post('/',(req,res)=>{

    var user={
        username:req.body.username,
        password:req.body.password
    };
    adminModel.validate(user, function(results){
		if(results.type==='Admin'){
            //res.cookie('uname', req.body.username);   
            req.session.sid= results.id;
            console.log(req.session.sid);
			res.redirect('/admin');
        }

       else if(results.type==='Customer'){
            //res.cookie('uname', req.body.username);   
            req.session.sid= results.id;
            console.log(req.session.sid);
			res.redirect('/customer');
        }

        else{
            console.log('error answer');
            req.session.errors="Invalid ID or Password.";
            //res.redirect('/login',req.session.errors);
            // res.redirect('/login',req.session.errors);
             res.redirect('/login');
        }
    });

    
});

module.exports =router;