var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017);

var db = new mongodb.Db('sql', server);
// 添加
var exists = function(obj,response){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection('goods', function(error, collection){
			if(error){
				console.log(error)	
			} else {
				console.log(obj)
				  collection.insert(obj);
				  response.send('添加成功')
			}
			db.close();
		})
	})	
}
//全局查找
var existsadd = function(obj,response){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection('goods', function(error, collection){
			if(error){
				console.log(error)	
			} else {
				if (obj._name2=='not'){
					collection.find().toArray(function(err, docs){
					response.send(docs)
					});
				}else if(obj._name=='not'){
					collection.find({bid:obj._name2}).toArray(function(err, docs){
						response.send(docs)
					});
				}
				
			}
			db.close();
		})
	})	
}
//修改
var existslook = function(obj,response){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection('goods', function(error, collection){
			if(error){
				console.log(error)	
			} else {
				console.log(obj)
			            collection.find({bid:obj}).toArray(function(err, docs){
			              response.send(docs);

					});
			}
			db.close();
		})
	})	
}
//删除
var existsdelete = function(obj,response){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection('goods', function(error, collection){
			if(error){
				console.log(error)	
			} else {
				
			 collection.findAndRemove({bid:obj._name}, function(err, object) {
					console.log(object)
			  });
			            
			}
			db.close();
		})
	})	
}
//更新
var existsupdate = function(obj,response){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//Account => 集合名（表名）
		db.collection('goods', function(error, collection){
			if(error){
				console.log(error)	
			} else {
			collection.update({bid:obj.bid},{$set:obj});
			
			 response.send('更新成功')
			            
			}
			db.close();
		})
	})	
}
exports.exists = exists;
exports.existsadd = existsadd;
exports.existslook = existslook;
exports.existsdelete = existsdelete;
exports.existsupdate = existsupdate;