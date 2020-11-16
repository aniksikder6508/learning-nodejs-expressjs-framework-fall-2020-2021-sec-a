const express 		= require('express');
//const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();


router.get('/', (req, res)=>{
    if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
	    res.render('home/index');
	}
});

router.post('/', (req, res)=>{

});

module.exports = router;