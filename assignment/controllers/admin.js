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
                id:results.id,
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
    
            res.render('admin/editprofile',customer);
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
           
           res.redirect('/admin');
       })
    }

    else{
        res.redirect('/login');
    }
	
});



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


    router.get('/deleteuser/:id',(req, res)=>{

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
        
                res.render('admin/deleteuser',customer);
            });
             
    }
        else{
            res.redirect('/login');
        }
    });

    router.post('/deleteuser/:id',(req, res)=>{
        var deletenotice={
            id:req.params.id
        }
        if(req.session.sid != null){
            adminModel.delete(deletenotice,function(results){
                
                res.redirect('/admin/userlist');
            })
         }
    
    });


    router.get('/addbook',(req,res)=>{

        if(req.session.sid != null){
            
        res.render('admin/addbook');
       
    }
        else{
            res.redirect('/login');
        }
    });


    router.post('/addbook',(req,res)=>{

        if(req.session.sid != null){
            
            var user={
                bookname:req.body.bookname,
                author:req.body.author,
                price:req.body.price
            }
        
            adminModel.addbook(user, function(results){
                        
                res.redirect('/admin');
        });   
       
    }
        else{
            res.redirect('/login');
        }
    });


    router.get('/booklist',(req,res)=>{

        if(req.session.sid != null){
            var id=req.session.sid;
            adminModel.getAllBook(function(results){
               res.render('admin/booklist',{users: results});    
            });
        }
        else{
            res.redirect('/login');
        }
    });




    router.get('/editbook/:id',(req,res)=>{

        var id=req.params.id;
          console.log(id);
          if(req.session.sid != null){
      
              adminModel.getByBookId(id,function(results){
                  var customer={
                      id:req.params.id,
                      bookname:results.bookname,
                      author:results.author,
                      price:results.price
                  };
          
                  res.render('admin/editbook',customer);
              });
               
      }
          else{
              res.redirect('/login');
          }
      });


      router.post('/editbook/:id',(req, res)=>{


        var customer={
         id:req.params.id,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
        }
        //console.log("edit id:"+id);
        if(req.session.sid != null){
    
          
    
           adminModel.updateBook(customer,function(results){
               
               res.redirect('/admin/booklist');
           })
        }
    
        else{
            res.redirect('/login');
        }
        
    });
    
      
    

module.exports =router;