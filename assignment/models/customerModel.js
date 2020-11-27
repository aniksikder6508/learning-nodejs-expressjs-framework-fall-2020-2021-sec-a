const db = require('./db');

module.exports= {


    orderList: function(user, callback){
		console.log('excute');
		console.log(user);
		var sql ="insert into orderlist (bookname,author,username,address) values('"+user.bookname+"','"+user.author+"','"+user.username+"','"+user.address+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},




}
