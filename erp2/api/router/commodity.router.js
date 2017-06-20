
var db = require('../module/commodity.db.js');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//图片上传功能
// var multer = require ('multer');

// var storage = multer.diskStorage({  
//   destination: function (req, file, cb) {  
//     cb(null, '../upload')  
//   },  
//   filename: function (req, file, cb) {  
//       var fileFormat = (file.originalname).split(".");
//       cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
//   }  
// }) 

// var upload = multer({ storage: storage })

// exports.Register = function(app){

// 	app.post('/uplaaoad', urlencodedParser, function(req, res) {
// 		console.log(123)
// 		console.log(req.files);  
// 		console.log(req.body); 	 	
// 	 	res.send('"上传成功"'); 
// 	});
// }

exports.Register = function(app){

// 添加商品
app.get('/index', urlencodedParser, function(request, response){
	console.log(request.query,'index')
	 db.exists(request.query,response)			
 })
//生成列表
app.get('/add', urlencodedParser, function(request, response){

	 console.log(request.query,'add')
	  db.existsadd(request.query,response)
				
 })
//修改
app.get('/look', urlencodedParser, function(request, response){
	console.log(request.query, 'look')
	 db.existslook(request.query.type,response)
				
 })
//删除
app.get('/delete', urlencodedParser, function(request, response){
	console.log(request.query,'delete')
	 db.existsdelete(request.query,response)
				
 })
//更新
app.get('/update', urlencodedParser, function(request, response){
	console.log(request.query,'update')
	db.existsupdate(request.query,response)
				
 })

};