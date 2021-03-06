const express = require('express');
const adminModel=require.main.require('./models/adminModel');
const customerModel=require.main.require('./models/customerModel');

const router = express.Router();


router.get('/',(req,res)=>{

    if(req.session.sid != null){

    res.render('customer/home');
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
                id:results.id,
                username:results.username,
                password:results.password,
                email:results.email,
                address:results.address,
               gender:results.gender,
                type:results.type
            };
    
            res.render('customer/profile',customer);
           
    })

}
    else{
        res.redirect('/login');
    }
});


router.get('/editprofile/:id',(req,res)=>{

    var id=req.params.id;
      console.log(id);
      if(req.session.sid != null){
  
          adminModel.getById(id,function(results){
              var customer={
                  id:req.params.id,
                  username:results.username,
                  password:results.password,
                  email:results.email,
                  address:results.address,
                 gender:results.gender,
                  type:results.type
              };
      
              res.render('customer/editprofile',customer);
          });
           
  }
      else{
          res.redirect('/login');
      }
  });
  
  
  router.post('/editprofile/:id',(req, res)=>{
  
  
      var customer={
       id:req.params.id,
      username:req.body.username,
      password:req.body.password,
      email:req.body.email,
      address:req.body.address,
      gender:req.body.gender
      }
      //console.log("edit id:"+id);
      if(req.session.sid != null){
  
        
  
         adminModel.update(customer,function(results){
             
             res.redirect('/customer/profile');
         })
      }
  
      else{
          res.redirect('/login');
      }
      
  });
  

  router.get('/booklist',(req,res)=>{

    if(req.session.sid != null){
        var id=req.session.sid;
        adminModel.getAllBook(function(results){
           res.render('customer/booklist',{users: results});    
        });
    }
    else{
        res.redirect('/login');
    }
});


router.get('/orderbook',(req,res)=>{

    if(req.session.sid != null){
       res.render('customer/orderbook');
    }
    else{
        res.redirect('/login');
    }
});


router.post('/orderbook',(req,res)=>{

        if(req.session.sid != null){
            
            var user={
                bookname:req.body.bookname,
                author:req.body.author,
                username:req.body.username,
                address:req.body.address
            }
        
            customerModel.orderList(user, function(results){
                        
                res.redirect('/customer');
        });   
       
    }
        else{
            res.redirect('/login');
        }
    });






module.exports =router;