var path = require('path');

var commodityRouter = require('./commodity.router.js');

exports.Register = function(express){

	var app = express();
	
	 app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        if(req.method=="OPTIONS") {
            res.send(200);/*让options请求快速返回*/
        } else{
            next();
        }
    });

    commodityRouter.Register(app);

	app.get('/', function(request, response){
		response.send('root');
	})

	app.use(express.static(path.join(path.resolve(__dirname, '../../'), '/')));


	app.listen(9999,function(){
		console.log('监听中...')
	});
}