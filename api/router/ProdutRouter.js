var db = require('../module/db.getProdut.js');
var apiResult = require('../module/ApiResult.js')

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

exports.Register = function(app){

	// range(价格范围)查询商品
	app.post('/range', urlencodedParser, function(request, response){
		db.getRange('flower', request.body, 'class_price', function(data){
			if(data){
				response.send(apiResult(true,'查找成功',data))
			} else {
				response.send(apiResult(false, '查询失败'));
			}
		})
	});

	// produtName(商品名)查询商品
	app.post('/produtname', urlencodedParser, function(request, response){
		db.getDetail('flower', request.body, 'name', function(data){
			if(data){
				response.send(apiResult(true,'查找成功',data))
			} else {
				response.send(apiResult(false, '查询失败'));
			}
		})
	});

	// getSaleDetail查询并排序商品
	app.post('/produtupdown', urlencodedParser, function(request, response){
		db.getSaleDetail('flower', request.body, 'name', function(data){
			if(data){
				response.send(apiResult(true,'查找成功',data))
			} else {
				response.send(apiResult(false, '查询失败'));
			}
		})
	});

	//加入购物车
	app.post('/carList',urlencodedParser,function(request,response){
        response.setHeader("Access-Control-Allow-Origin","*");
		db.addCar('car',request.body,'id',function(result){
			if(result){
				db.update('car',result[0],'id',function(res){
					if(res){
                        response.send(apiResult(true,'购物车中已有该商品，修改数量成功'));
					}else{
						response.send(apiResult(false,'修改失败'))
					}
				});
			}else{
				db.save('car',request.body,function(result){
					if(result){
                        response.send(apiResult(true,'已经成功加入购物车'))
					}else{
						response.send(apiResult(false,'添加失败'))
					}
				});
			}
		})
	});

	//删除购物车单个商品
	app.post('/remove',urlencodedParser,function(request,response){
        response.setHeader("Access-Control-Allow-Origin","*");
		db.remove('car',request.body,'id',function(result){
			if(result){
				console.log(result);
				response.send(apiResult(true,'删除成功'))
			}else{
				response.send(apiResult(false,'删除失败'));
			}
		})
	})

	//获取购物车里所有的商品
	app.post('/shopCar',urlencodedParser,function(request,response){
        response.setHeader("Access-Control-Allow-Origin","*");
        db.getCar('car',function(result){
        	if(result){
        		response.send(apiResult(true,'',result))
			}else{
        		response.send(apiResult(false,'请求失败'))
			}
		})
	})

	//提交订单
	app.post('/order',urlencodedParser,function(request,response){
		console.log(123213);
        db.save('order',request.body,function(result){
        	if(result){
        		//要删除car里的内容
                db.deletel('car',function(data){
					console.log(data);
                })
				response.send(apiResult(true,'提交订单成功'));
			}else{
        		response.send(apiResult(false,'提交失败'));
			}
		});
	})

	// id查询商品
	app.post('/getProdut', urlencodedParser, function(request, response){
		response.setHeader("Access-Control-Allow-Origin","*");
		db.getProdut('cake', request.body, 'id', function(data){
			if(data){
				response.send(apiResult(true,'查找成功',data))
			} else {
				response.send(apiResult(false, '商品ID错误'));
			}
		})
	});

	// 查询id存在
	app.post('/getProdut_id', urlencodedParser, function(request, response){
		response.setHeader("Access-Control-Allow-Origin","*");
		db.getProdut_id('cake', request.body, 'id', function(data){
			// console.log(request.body)
			if(data){
				// request.session.name = request.body.name;//将已登录用户名存入session
				response.send(apiResult(true,'商品ID重复，请认真核对'))
			} else {
				response.send(apiResult(false, '商品ID无重复'));
			}
		})
	});
	
	// 获取所有商品
	app.post('/Produt', urlencodedParser, function(request, response){
		response.setHeader("Access-Control-Allow-Origin","*");
		// console.log(request.body);
		db.all('cake', request.body, 'id', function(data){
			if(data){
				
				response.send(apiResult(true,'',data))
			} else {
				response.send(apiResult(false, '商品ID错误'));
			}
		})
	})
}