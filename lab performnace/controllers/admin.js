const express = require('express');
const adminModel=require.main.require('./models/adminModel');
const router = express.Router();



router.get('/',(req,res)=>{

    if(req.session.sid != null){

    res.render('admin/home');
    }
    else{
        res.redirect('/login');
    }
});


router.get('/reg',(req,res)=>{

    if(req.session.sid != null){

    res.render('admin/reg');
    }
    else{
        res.redirect('/login');
    }
});


router.post('/reg',(req,res)=>{
    var user={
        employername:req.body.employername,
        company:req.body.company,
        contactno:req.body.contactno,
        username:req.body.username,
        password:req.body.password,
        type:req.body.type

    }

    adminModel.insert(user, function(results){
                
        res.redirect('/login');
});   
})


router.get('/userlist',(req,res)=>{

    if(req.session.sid != null){
            var id=req.session.sid;
            adminModel.getAll(function(results){
               res.render('admin/userlist',{users: results});    
            });
        }
        else{
            res.redirect('/login');
        }
    });

module.exports =router;