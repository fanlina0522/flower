var db = require('../module/db.require.js');

var apiResult = require('../module/apiResult.module.js')

var bodyParser = require('body-parser');

//中间件
var urlencodedParser = bodyParser.urlencoded({ extended: false })


//如果要使用cookie，需要显式包含这个模块
// var cookieParser = require('cookie-parser');
//如果要使用session，需要单独包含这个模块
// var session = require('express-session');


exports.Route = function(app){

	//设置 session
	/*app.use(cookieParser());
	
	app.use(session({
		secret: '12345',//用来对session数据进行加密的字符串.这个属性值为必须指定的属性
		name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
		cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
		resave: false,
		saveUninitialized: true,
	}))*/


	//详情页id请求数据库
	app.get('/getDetail',function(request,response){
		db.queryData('cake',request.query,'id',function(data){
			response.send(data)
		})
	})

	//请求listData数据库
	app.get('/getData',function(request,response){
		console.log('测试getdata路由')
		
		db.exists('listData',request.query,'listId',function(data){
			
			response.send(data)
		})
	})

	//详情页id请求评论数据
	// app.get('/moreCom',function(request,response){
	// 	db.moreCom('cake',request.query,'type',function(data){
	// 		response.send(data)
	// 	})
	// })


}
