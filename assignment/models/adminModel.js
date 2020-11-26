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

	update:function(customer,callback){
		var sql= "update user set username='"+customer.username+"',password='"+customer.password+"',email='"+customer.email+"',address='"+customer.address+"',gender='"+customer.gender+"'  where id='"+customer.id+"'";
		db.execute(sql,function(results){
				callback(true);
		});

	},

	
	getAll: function(callback){
		var sql ="select * from user where type='Customer'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},

	delete: function(deletenotice, callback){
		var sql="delete from user where id='"+deletenotice.id+"'";
		db.execute(sql,function(results){
			callback(true);
		});

	},

	addbook: function(user, callback){
		console.log('excute');
		console.log(user);
		var sql ="insert into booklist (bookname,author,price) values('"+user.bookname+"','"+user.author+"','"+user.price+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},


	getAllBook: function(callback){
		var sql ="select * from booklist";
		db.getResults(sql, function(results){
			callback(results);
		});
	},


	getByBookId: function(id, callback){
		var sql ="select * from booklist where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},


	updateBook:function(customer,callback){
		var sql= "update booklist set bookname='"+customer.bookname+"',author='"+customer.author+"',price='"+customer.price+"'  where id='"+customer.id+"'";
		db.execute(sql,function(results){
				callback(true);
		});

	},


}