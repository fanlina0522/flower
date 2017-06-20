var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app){
    app.post('/login', urlencodedParser, function(request, response){
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            DB.get('account', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else if(data[0].password != request.body.password){
                        response.send(ApiResult(false, '密码错误！'));
                    } else {
                        response.send(result);
                    }
                }
            })
        }
    });

    app.post('/register', urlencodedParser, function(request, response){
        console.log(request.body)
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            delete request.body.repassword;
            DB.get('account', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(data[0]){
                        response.send(ApiResult(false, '用户名已被注册'));
                    } else {
                        DB.insert('account', request.body, function(insertResult){
                            response.send(insertResult);
                        })
                    }
                }
            })
        }
    })

    //请求listData数据库
    app.get('/getData',function(request,response){
        console.log('测试getdata路由')
        
        DB.exists('flower',request.query,'listId',function(data){
            
            response.send(data)
        })
    })

    //请求ucmsgSave
    app.post('/ucmsgSave',urlencodedParser,function(request,response){

        DB.ucmsgsave('userdate',request.body,'phone',function(data){

            response.send(data)
        })
    })
    //请求ucmsgSave
    app.post('/ucmsgLoad',urlencodedParser,function(request,response){

        DB.ucmsgLoad('userdate',request.body,'phone',function(data){

            response.send(data)
        })
    })

    //修改密码
    app.post('/amendPsw',urlencodedParser,function(request,response){

        DB.amendPsw('account',request.body,'username',function(data){

            response.send(data)
        })
    })


}