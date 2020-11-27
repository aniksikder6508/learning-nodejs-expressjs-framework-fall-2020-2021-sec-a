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



module.exports =router;