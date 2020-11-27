const db = require('./db');


module.exports= {
	validate: function(user, callback){
		var sql ="select * from userinfo where username='"+user.username+"' and password='"+user.password+"'";
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
		var sql ="insert into userinfo (employername,company,contactno,username,password,type) values('"+user.employername+"','"+user.company+"','"+user.contactno+"','"+user.username+"','"+user.password+"','"+user.type+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},

	getAll: function(callback){
		var sql ="select * from userinfo where type='Employee'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},


}