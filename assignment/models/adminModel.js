const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql ="select * from user where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},


	insert: function(user, callback){
		console.log('excute');
		console.log(user);
		var sql ="insert into user (username,password,email,address,gender,type) values('"+user.username+"','"+user.password+"','"+user.email+"','"+user.address+"','"+user.gender+"','"+user.type+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},

	getById: function(id, callback){
		var sql ="select * from user where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},



}