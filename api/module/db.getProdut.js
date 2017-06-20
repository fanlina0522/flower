var db = require('./db.global.js')();


// skip：查找起始位置
// limit：得到结果的个数
// sort：根据给定条件排序 1升序-1降序

// range(价格范围)查询商品
var getRange = function(_collection, data, key, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//_collection=>cake => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){																								
				console.log(error)	
			} else {
				// console.log(data[key])
				var obj = {};
				obj[key] = data[key];
				collection.find(obj).toArray(function(err, docs){
					if (docs.length>=1) {
						callback(docs);
					}else{
						callback();
					}
				});
			}
			db.close();
		})
	})	
}

// 获取商品
var getDetail = function(_collection, data, key, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//_collection=>cake => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){																								
				console.log(error)	
			} else {
				var getdata = Object.assign({},data);//深复刻
				if (getdata.get) {
					// 删除 最后的属性
					delete getdata.get;
				}else if (getdata.num) {
					// 删除 查找初始值
					delete getdata.num;
				}
				console.log(data)
				collection.find(getdata).skip(Number(data.num)).limit(4).toArray(function(err, docs){
					// console.log(docs)
					if (docs.length>=1) {
						callback(docs);
					}else{
						callback();
					}
				});
			}
			db.close();
		})
	})	
}

// 获取排序商品
var getSaleDetail = function(_collection, data, key, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//_collection=>cake => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){																								
				console.log(error)	
			} else {				
				var getdata = Object.assign({},data);//深复刻
				if (getdata.get) {
					// 删除 最后的属性
					delete getdata.get;
				}else if (getdata.num) {
					// 删除 查找初始值
					delete getdata.num;
				}
				console.log(data.num)
				collection.find(getdata).toArray(function(err, docs){
					console.log(getdata)
					if (docs.length>=1) {
						if (data.get == "saleup") {//销量降序
							let arr = docs;
			                for(var i=0 ; i<arr.length ; i++){
			                    for(var j=0 ; j<arr.length ; j++){
			                        if (arr[i].hot<arr[j].hot) {
			                            var temp = arr[i];
			                            arr[i]=arr[j];
			                            arr[j]=temp;
			                        }
			                    }
			                }
			                callback(arr);
			                // console.log(arr)
						}else if(data.get == "saledown"){//销量升序
							let arr = docs ;
			                for(var i=0 ; i<arr.length ; i++){
			                    for(var j=0 ; j<arr.length ; j++){
			                        if (arr[i].hot>arr[j].hot) {
			                            var temp = arr[i];
			                            arr[i]=arr[j];
			                            arr[j]=temp;
			                        }
			                    }
			                }
			                callback(arr);
						}else if(data.get == "priceup"){//价格降序
							let arr = docs ;
			                for(var i=0 ; i<arr.length ; i++){
			                    for(var j=0 ; j<arr.length ; j++){
			                        if (arr[i].price<arr[j].price) {
			                            var temp = arr[i];
			                            arr[i]=arr[j];
			                            arr[j]=temp;
			                        }
			                    }
			                }
			                callback(arr);
						}else if(data.get == "pricedown"){//价格升序
								let arr = docs ;
			                for(var i=0 ; i<arr.length ; i++){
			                    for(var j=0 ; j<arr.length ; j++){
			                        if (arr[i].price>arr[j].price) {
			                            var temp = arr[i];
			                            arr[i]=arr[j];
			                            arr[j]=temp;
			                        }
			                    }
			                }
			                callback(arr);
						}							
					}else{
						callback();
					}
				});
			}
			db.close();
		})
	})	
}

// id查询商品
var getProdut = function(_collection, data, key, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//_collection=>cake => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				var obj = {};
				obj[key] = data[key];
				collection.find(obj).toArray(function(err, docs){
					if (docs.length>=1) {
						callback(docs);
					}else{
						callback();
					}
					
				});
			}
			db.close();
		})
	})	
}
// type查询商品
var getType = function(_collection, data, key, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//_collection=>cake => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){																								
				console.log(error)	
			} else {
				var obj = {};
				obj[key] = data[key];
				collection.find(obj).toArray(function(err, docs){
					if (docs.length>=1) {
						callback(docs);
					}else{
						callback();
					}
					
				});
			}
			db.close();
		})
	})	
}

// 获取所有商品
var all = function(_collection, data, key, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//_collection=>cake => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error);
				db.close();
			} else {				
				collection.find().toArray(function(err, docs){
					// console.log(docs)
					callback(docs);
					db.close();
				});
			}
			
		})
	})	
}

// 添加商品
var saveProdut = function(_collection, data, key, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//_collection=>cake => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error);	
			} else {

				var id_obj = {};
				id_obj[key] = data[key];
				console.log(id_obj)
				collection.find(id_obj).toArray(function(err, docs){
					console.log(docs.length);

					if (docs.length>=1) {
						callback();
						db.close();
					}else{
						data.images = JSON.parse(data.images);
						data.norms = JSON.parse(data.norms);
						data.type = JSON.parse(data.type);
						// console.log(data);
						var obj = {};
						for(var key in data){
							obj[key] = data[key];
						}
						collection.insert(obj);
						callback(data);
						db.close();
					}
				});
				
				
			}
			
		})
	})	
}

// 修改商品
var modifyProdut = function(_collection, data, key, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//_collection=>cake => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error);	
			} else {
				// data._id = JSON.parse(data._id);
				data.norms = JSON.parse(data.norms);
				data.type = JSON.parse(data.type);
				
				var obj = {};
				for(var key in data){
					obj[key] = data[key];
				}
				console.log(obj);
				collection.update({'id':data.id},{$set:obj});
				callback(data);
				db.close();
			}			
		})
	})	
}

// 查询id是否存在
var getProdut_id = function(_collection, data, key, callback){
	db.open(function(error, db){
		if(error){
			console.log('connect db:', error);
		}
		//_collection=>cake => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)	
			} else {
				var obj = {};
				obj[key] = data[key];
				collection.find(obj).toArray(function(err, docs){
					if (docs.length==0) {
						callback();
					}else{
						callback(docs);
					}
				});
			}
			db.close();
		})
	})	
}
//购物车,要根据商品的id进行查找，如果已经存在同一种商品，则找到对应的商品，并改变数量值
var addCar = function(_collection,data,key,callback){
	db.open(function(error,db){
        if(error){
            console.log('connect db:', error);
        }
		db.collection(_collection,function(err,collection){
			if(error){
				console.log(error);
			}else{
				var  goods_obj = {};
				goods_obj[key] = data[key];

				collection.find(goods_obj).toArray(function(err,docs){
                    if (docs.length>=1){
                    	// var docs = JSON.parse(docs);
                    	for(var i in docs[0]){
                    		if (data.id ==docs[0][i]){
								   var num = docs[0].qty
                    			   docs[0].qty = Number(data.qty) + Number(num) + '';
							}
	                    }
                        callback(docs);
                    }else{
                        callback();
                    }
				})
			}
            db.close();
		})
	})
}

//修改数量
var update = function(_collection,data,key,callback){
    db.open(function(error,db){
        if(error){
            console.log('connect db:', error);
        }
        db.collection(_collection,function(err,collection){
            if(error){
                console.log(error);
            }else{
                var  goods_obj = {};
                goods_obj[key] = data[key];

                collection.find(goods_obj).toArray(function(err,docs){
					if(err){
						console.log(err);
					}else{
						collection.update({'id':data.id},{$set:{qty:data.qty}});
						callback(docs);
						console.log(docs);
					}
                    db.close();
                })
            }
        })
    })
}
//将商品加入购物车  //保存订单
var save = function(_collection,data,callback){

    db.open(function(error, db){
        if(error){
            console.log('connect db:', error);
        }
        db.collection(_collection, function(error, collection){
            if(error){
                console.log(error)
            } else {
                collection.insert(data, function(err,data){
                	if(err){
                		console.log(err);
					}else{
                        callback(data);
					}
				});
            }
            db.close();
        })
    })
}

//查询购物车
var getCar = function(_collection,callback){
    db.open(function(error, db){
        if(error){
            console.log('connect db:', error);
        }
        //_collection=>cake => 集合名（表名）
        db.collection(_collection, function(error, collection){
            if(error){
                console.log(error);
                db.close();
            } else {
                collection.find().toArray(function(err, docs){
                    // console.log(docs)
                    callback(docs);
                });
            }
            db.close();
        })

    })
}

//删除购物车商品
var remove = function(_collection,data,key,callback){
    db.open(function(error,db){
        if(error){
            console.log('connect db:', error);
        }
        db.collection(_collection,function(err,collection){
            if(error){
                console.log(error);
            }else{
                var  goods_obj = {};
                goods_obj[key] = data[key];

                collection.find(goods_obj).toArray(function(err,docs){
                    if(err){
                        console.log(err);
                    }else{
                        collection.remove({'id':data.id});
                        callback(docs);
                    }
                    db.close();
                })
            }
        })
    })
}

// 删除car集合
var deletel = function(_collection,callback){
    db.open(function(error,db){
        if(error){
            console.log('connect db:', error);
        }
        db.collection(_collection,function(err,collection){
            if(error){
                console.log(error);
            }else{
                    collection.remove({});
                    callback('remove');
                    db.close();
                }

        })
        // db.dropCollection(_collection,function(err,result){
        	// console.log(result)
		// 	if(err){
		// 		console.log(err);
		// 	}else{
		// 		console.log('ok');
		// 		callback();
		// 	}
		// 	db.close();
		// });
    })
}

exports.addCar =  addCar;

exports.save = save;

exports.getCar = getCar;

exports.update = update;

exports.remove = remove;

exports.deletel = deletel;

exports.getRange = getRange;

exports.getDetail = getDetail;

exports.getSaleDetail = getSaleDetail;

exports.all = all;

exports.getProdut = getProdut;

exports.getType = getType;

exports.saveProdut = saveProdut;

exports.getProdut_id = getProdut_id;

exports.modifyProdut = modifyProdut;