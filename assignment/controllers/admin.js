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


router.get('/profile',(req,res)=>{

    if(req.session.sid != null){

        var id=req.session.sid;
        
        adminModel.getById(id,function(results){
            var customer={
                username:results.username,
                password:results.password,
                email:results.email,
                address:results.address,
               gender:results.gender,
                type:results.type
            };
    
            res.render('admin/profile',customer);
           
    })

}
    else{
        res.redirect('/login');
    }
});

module.exports =router;