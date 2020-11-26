const express = require('express');
const adminModel=require.main.require('./models/adminModel');

const router = express.Router();


router.get('/',(req,res)=>{
    res.render('reg/reg');
           
    
});

router.post('/',(req,res)=>{
    var user={
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        address:req.body.address,
        gender:req.body.gender,
        type:req.body.type

    }

    adminModel.insert(user, function(results){
                
        res.redirect('/login');
});   
})




module.exports =router;