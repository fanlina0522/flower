var ApiResult = require('./ApiResult')

var MongoDB = require('mongodb');
var MongoDBServer = new MongoDB.Server('localhost', 27017);
var db = new MongoDB.Db('flower', MongoDBServer);

module.exports = {
    get: function(_collection, _condition, _callback){
        db.open(function(dberror){
            if(dberror){
                _callback(ApiResult(false, null, dberror));
                return;
            }

            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                var condition = _condition || {};
                collection.find(condition).toArray(function(resulterror, dataset){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));    
                    } else {
                        _callback(ApiResult(true, null, dataset));
                    }
                })
            })
            db.close();
        })
    },
    insert: function(_collection, _newdata, _callback){
        db.open(function(dberror){
            if(dberror){
                _callback(ApiResult(false, null, dberror));
                return;
            }

            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                collection.insert(_newdata, function(resulterror, result){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));
                    } else {
                        _callback(ApiResult(true, null, result));
                    }
                })
            })
            db.close();
        })
    },
    
     //私有方法
    exists: function(_collection, data, key, callback){
        db.open(function(error, db){
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    var obj = {};
                    obj[key] = data[key];
                    collection.find(obj).toArray(function(err, docs){
                        console.log(docs)
                        if(docs){
                            callback(docs)
                            
                        }else{
                            collection.insert(data);
                            callback({status:'数据不存在'})
                        }
                        db.close();
                        
                    });
                }
            })
        })  
    },

    //私有方法 chaoping
    ucmsgLoad: function(_collection, data, key, callback){
        db.open(function(error, db){
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)
                } else {
                    var obj = {};
                    obj[key] = data[key];
                    collection.find(obj).toArray(function(err, docs){
                        if(docs){
                            callback(docs[0])
                        }else{
                            collection.insert(data);
                            callback({status:'数据不存在'})
                        }
                        db.close();

                    });
                }
            })
        })
    },

    //更新user数据
    ucmsgsave: function(_collection, data, key, callback){
        db.open(function(error, db){
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)
                } else {
                    var obj = {};
                    obj[key] = data[key];
                    collection.find(obj).toArray(function(err, docs){
                        if(!docs[0]){
                            collection.insert(data)
                            callback(docs[0])
                        }else{
                            collection.update( obj , data , {upsert:true} )
                            collection.find(obj).toArray(function(err, docss){
                                if(docss[0]){
                                    console.log(docss)
                                    callback(docss[0])
                                }

                            })
                        }

                        db.close();

                    });
                }
            })
        })
    },

    amendPsw:function(_collection, data, key, callback){
        db.open(function(error, db){
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)
                } else {
                    var obj = {};
                    obj[key] = data[key];
                    collection.find(obj).toArray(function(err, docs){
                        if(docs[0]){
                            collection.update( obj , data , {upsert:true} )
                            callback({status:true})
                        }else{
                            console.log('用户不存在')
                        }

                        db.close();

                    });
                }
            })
        })
    }
}