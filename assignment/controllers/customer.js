const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>{

    if(req.session.sid != null){

    res.render('customer/home');
    }
    else{
        res.redirect('/login');
    }
});

module.exports =router;