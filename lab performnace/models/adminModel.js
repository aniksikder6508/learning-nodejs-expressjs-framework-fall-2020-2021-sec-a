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


}