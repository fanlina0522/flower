var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017);

var db = new mongodb.Db('flower', server);

module.exports = function(){
	return db;
}

