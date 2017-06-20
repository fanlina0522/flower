var path = require('path');

var commodityRouter = require('./commodity.router.js');

exports.Register = function(express){

	var app = express();

    commodityRouter.Register(app);

	app.get('/', function(request, response){
		response.send('root');
	})

	app.use(express.static(path.join(path.resolve(__dirname, '../../'), '/')));


	app.listen(9999,function(){
		console.log('监听中...')
	});
}