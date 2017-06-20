$(function(){
	// 三的显示隐藏
$('.admin-side-toggle').on('click', function() {
		var sideWidth = $('.jt-main').outerWidth();
		if(sideWidth === 200) {
			$('#admin-body').animate({
				left: '0'
			});
			$('.page-container').animate({
				left: '0'
			}); 
			$('.jt-main').animate({
				width: '0'
			});
		} else {
			$('#admin-body').animate({
				left: '200px'
			});
			$('.page-container').animate({
				left: '200px'
			});
			$('.jt-main').animate({
				width: '200px'
			});
		}
	});
//个人中心
$('.admin-header-user').on('click', function() {
	var layui_nav_child = $('.layui-nav-child').css('display');
	if (layui_nav_child == 'none') {
		$('.layui-nav-child').slideDown(600);
	}else{
		$('.layui-nav-child').slideUp(600);
	}
	})

// 商品详情
$('.sp_cite').on('click',function(){
	   $('.page-container ').hide(600);
		$('.layui-body').show(600);
		  $('.loading').show(600)
		setTimeout(function(){
			$('.loading').hide(600)
			window.location.href = "../html/index.html"
		}, 1000);
		
})
    
// 图片处理
function img(path){
	var pos1 = path.lastIndexOf('/');
	var pos2 = path.lastIndexOf('\\');
	var pos  = Math.max(pos1, pos2)
	if( pos<0 )
	return path;
	else
	return path.substring(pos+1);
}
// 获取勾选框
function checked(yongtu){
    var typearr = [];
    yongtu.each(function(idx , ele){
      if ($(ele).prop("checked")) {
        typearr.push($(ele).val());
      }                
    });
    return typearr
}
//判断输出的是否是数字
function number(box){
   if (/^[0-9]*$/.test(box)) {
   	var num_in = parseInt(box)
   }else{
   		alert('请输入正确的价格和销量')
   		var num_in = parseInt(0)
   }
   	return num_in
}


 //头部添加 ------------------------------

$('#add').on('click', function() {
	$('.page-container ').show(600);
	$('.layui-body').hide(600);
})


// 头部搜索-----------------------------------

 $('.show_input').hide();
 // 添加class
 $('#search span').removeClass('bianshow');
// 点击显示
  $('#search').click(function(event) {
	   $('.show_input').show(600)
	   $('#search span').addClass('bianshow')
  }); 

// 点击搜索
	$('.shousuo').on('click', '.bianshow', function(e) {
	    var show_input = $('.show_input').val()
	    $('.layui-field-box tbody tr').html('');
	    $('.loading').show(600)
	    setTimeout(function() {
	        seek('not', show_input)
	        $('.loading').hide(600)
	  }, 2000);
});

//-----------------------------------------------

function datum (){
// 获取勾选框
    var jiage = $('.jiage input[type=checkbox]');
    var yongtu = $('.yongtu input[type=checkbox]');
    var duixiang = $('.duixiang input[type=checkbox]');
    var huacai = $('.huacai input[type=checkbox]');
    var num = $('.num input[type=checkbox]');
    var color=$('.yangse input[type=checkbox]');
    var type=$('.leixin input[type=checkbox]');

	var obj={
		// 编号
		'bid':$('.goods-id').val(),
		// 商品名称
		'name':$('.goods-name').val(),
		// 商品详情
		'details':$('.goods-details').val(),
		// 商品价格
		'price':number($('.goods-price').val()),
		// 材料
		'material':$('.goods-material').val(),
		//包装
		'packing':$('.goods-packing').val(),
		// 花语
		'flower':$('.goods-flower').val(),
		// 附送
		'provide':$('.goods-provide').val(),
		// 配送
		'Distribution':$('.goods-Distribution').val(),
		// 销量
		'hot':number($('.goods-hot').val()),
		//分类价格
		'class_price':checked(jiage),
		// 分类-用途
		'class_use':checked(yongtu),
		// 分类-对象
		'class_object':checked(duixiang),
		// 分类-花材
		'class_flower':checked(huacai),
		// 分类-数量
		'class_num':checked(num),
		//分类-颜色
		'class_color':checked(color),
         //分类-类型
		'class_type':checked(type),
		//商品图片
		 'big_img':img($('.big_img input').val()),
		  //商品小图
		 'small_img':[img($($('.xiao_img input')[0]).val()),img($($('.xiao_img input')[1]).val())],
		 //详情图片
		'details_img':[img($($('.details_img input')[0]).val()),img($($('.details_img input')[1]).val())]
	}
 	return obj
}
//添加按钮
$('.btn-primary').click(function(){
	var _obj=datum ()
	ajax(_obj)
})
//更新按钮
$('.btn-update').click(function(){
	var _obj=datum ()
	console.log(_obj)
	$.ajax({
        url: erp.baseUrl + "update",
        data: _obj,
        success: function(data) {
          	if (data == '更新成功'){
          		alert('更新成功')
          		 window.location.href = "../html/index.html"
          	}
        }
    });

})

// 添加数据
function ajax(obj) {
    $.ajax({
        url: erp.baseUrl + "html/index",
        data: obj,
        success: function(data) {
          	if (data == '添加成功') {
          		alert('添加成功')
          		 window.location.href = "../html/index.html"
          	}
        }
    });
}

//搜索,全局查找
seek ('all','not')

//查找
function seek (name,name2){
		$.ajax({
	    url: erp.baseUrl + "add",
	    data:{_name:name,_name2:name2},
	    success: function(data) {
	         append(data);

	    }
	});
}
//删除
function _delete(name){
		$.ajax({
	    url: erp.baseUrl + "delete",
	    data:{_name:name},
	    success: function(data) {
	       console.log(data)
	    }
	});
}

// 生成数据
function append(data) {
    //结果集循环
    for (var i = 0; i < data.length; i++) {
        //生成tr标签
        var tr = $('<tr/>');
        //生成内容
        tr.html(` 
            <td><input type="checkbox"></td>
			<td>${data[i].bid}</td>
			<td>${data[i].name}</td>
			<td>${data[i].price}</td>
			<td>${data[i].hot}</td>
			<td>${data[i].class_type}</td>
			<td style="text-align:center;">${data[i].class_color}</td>
			<td>
				<a href="javascript:;" class="yulan_btn tianjia">添加</a>
				<a href="javascript:;" class="yulan_btn bianji">编辑</a>
				<a href="javascript:;" class="yulan_btn d_delete">删除</a>
			</td>
        `);
        //插入tbody
      $('.layui-field-box tbody').append(tr);
  }
}
//添加

	$('.layui-field-box tbody').on('click','.tianjia',function(e){
		$('.page-container ').show(600);
		$('.layui-body').hide(600);
			
	});

//编辑

	$('.layui-field-box tbody').on('click','.bianji',function(e){
		var yulan =	$(e.target).parent().siblings().eq(1).html();
		$('.btn-primary').hide()
		$('.btn-update').show()
		$('.formControls_p').show()
		$('.un_img').show()
		$(".goods-id").attr("disabled","disabled"); 
			look(yulan)
	});
//删除
	$('.layui-field-box tbody').on('click','.d_delete',function(e){
		var d_delete = $(e.target).parent().siblings().eq(1).html();
		_delete(d_delete)
		 $(e.target).parent().parent().empty()

	});
//

function look(name){
    $.ajax({
        url: erp.baseUrl + "look",
        data: {type: name},
        success: function(data) {
       	if (data!=[]) {
       	// 显示隐藏
       	console.log(data)
   		$('.page-container').show(600);
		$('.layui-body').hide(600);

		$('.goods-id').val(data[0].bid)
		// 商品名称
		$('.goods-name').val(data[0].name)
		// 商品详情
		$('.goods-details').val(data[0].details)
		// 商品价格
		$('.goods-price').val(data[0].price)
		// 材料
		$('.goods-material').val(data[0].material)
		//包装
		$('.goods-packing').val(data[0].packing)
		// 花语
		$('.goods-flower').val(data[0].flower)
		 // 附送
		$('.goods-provide').val(data[0].provide)
		// 配送
		$('.goods-Distribution').val(data[0].Distribution)
		// 销量
		$('.goods-hot').val(data[0].hot)
		//分类价格
		$('.jiage input').val(data[0].class_price)
		// 分类-用途
		$('.yongtu input').val(data[0].class_use)
		// 分类-对象
		$('.duixiang input').val(data[0].class_object)
		// 分类-花材
		$('.huacai input').val(data[0].class_flower)
		 // 分类-数量
		 $('.num input').val(data[0].class_num)
		//分类-颜色
		 $('.yangse input').val(data[0].class_color)
		 //分类-类型
		  $('.leixin input').val(data[0].class_type)
		//商品图片
		$('.big_img input').html(data[0].big_img)
		$('.big_img img').attr("src","../img/"+data[0].big_img);
		//商品小图
		$($('.xiao_img img')[0]).html(data[0].small_img[0])
		$($('.xiao_img img')[0]).attr("src","../img/"+data[0].small_img[0]);

		$($('.xiao_img img')[1]).html(data[0].small_img[1])
		$($('.xiao_img img')[1]).attr("src","../img/"+data[0].small_img[1]);
		 //详情图片
		$($('.details_img img')[0]).html(data[0].details_img[0])
		$($('.details_img img')[0]).attr("src","../img/"+data[0].details_img[0]);

		$($('.details_img img')[1]).html(data[0].details_img[1])
		$($('.details_img img')[1]).attr("src","../img/"+data[0].details_img[1]); 	
       		}
            
        }
    });

	}

// 图片更新
  $('.form_img input').change(function(e){

  		$(this).html(img($(this).val()))

  	 if (e.target.className=='shangchuang_img input_01') {

  	 	$('.big_img img').attr("src","../img/"+img($('.big_img input').val()));

  	 }else if(e.target.className=='input_02'){

  	 	$($('.xiao_img img')[0]).attr("src","../img/"+img($($('.xiao_img input')[0]).val()));

  	 }else if(e.target.className=='input_03'){

  	 	$($('.xiao_img img')[1]).attr("src","../img/"+img($($('.xiao_img input')[1]).val()));

  	 }else if(e.target.className=='input_04'){

  	 	$($('.details_img img')[0]).attr("src","../img/"+img($($('.details_img input')[0]).val()));

  	 }else if(e.target.className=='input_05'){

  	 	$($('.details_img img')[1]).attr("src","../img/"+img($($('.details_img input')[1]).val())); 	
  	 }
	
 });

// $('.submit_img').click(function(){
//       var jt_img = [img($('.big_img input').val()),img($($('.xiao_img input')[0]).val()),img($($('.xiao_img input')[1]).val())]
	
// 	$.post('http://localhost:9999/uplaaoad', {name:jt_img}, function(response){
// 					console.log(response);
// 				})
// })

 });

