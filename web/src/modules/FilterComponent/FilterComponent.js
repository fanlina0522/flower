import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as goodsActions from '../Goods/GoodsAction'
import './FilterComponent.scss'
import '../../static/font/iconfont.css'

let priceArr=['全部','199元以内','200-299元','300-399元','400-499元','500-699元','700元以上'];
let purposeArr=['全部','爱情鲜花','生日鲜花','友情鲜花','周年纪念','问候长辈','回报老师','探病慰问','祝贺鲜花','道歉鲜花','包月鲜花'];
let materArr=['全部','玫瑰','百合','康乃馨 ','向日葵','满天星','绣球','桔梗','玫瑰+百合','玫瑰+康乃馨','百合+康乃馨','其它'];
let sprayArr=['全部','9枝','10枝','11枝','12枝','15枝','18枝','19枝','21枝','21枝','29枝','33枝','50枝','66枝','99枝上'];
let colorArr=['全部','红色','白色','粉色','香槟色','紫色','黄色','彩色'];
let typeArr=['全部','单品花束','精品礼盒','手提花篮','手捧花','瓶插鲜花','高端混搭花束']

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

class FilterComponent extends Component{
	constructor(props){
        super(props);
        this.state = {
            needsclick: 0,
            purposeclick:0,
			materclick:0,
			sprayclick:0,
			colorclick:0,
			typeclick:0,
        };
    }
	needsclickClass(idx){
		return idx===this.state.needsclick ? 'needsclick' : '';
	}
	purposeclickClass(idx){
		return idx===this.state.purposeclick ? 'needsclick' : '';
	}
	materclickClass(idx){
		return idx===this.state.materclick ? 'needsclick' : '';
	}
	sprayclickClass(idx){
		return idx===this.state.sprayclick ? 'needsclick' : '';
	}
	colorclickClass(idx){
		return idx===this.state.colorclick ? 'needsclick' : '';
	}
	typeclickClass(idx){
		return idx===this.state.typeclick ? 'needsclick' : '';
	}
	// 清除筛选条件
	clearaneeds(){
		this.setState({needsclick: 0,purposeclick:0,materclick:0,sprayclick:0,colorclick:0,typeclick:0});
	}
	// 获取所有筛选对象
	getProdut(){
		// 价格筛选
		let class_price = this.state.needsclick!==0 ? priceArr[this.state.needsclick] : '';
		let range = {class_price:class_price};
		// 用途筛选
		let class_use = this.state.purposeclick!==0 ? purposeArr[this.state.purposeclick] : '';
		let purpose = {class_use:class_use};
		// 花材筛选
		let class_flower = this.state.materclick!==0 ? materArr[this.state.materclick] : '';
		let mater = {class_flower:class_flower};
		// 花枝数 筛选
		let class_num = this.state.sprayclick!==0 ? sprayArr[this.state.sprayclick] : '';
		let spray = {class_num:class_num};
		// 颜色筛选
		let class_color = this.state.colorclick!==0 ? colorArr[this.state.colorclick] : '';
		let color = {class_color:class_color};
		// 类型筛选
		let class_type = this.state.typeclick!==0 ? typeArr[this.state.typeclick] : '';
		let type = {class_type:class_type};		

		function getExtend(arr){
			let obj = {};
			arr.map(function(item){
				for(var i in item){
					if (item[i] !=="") {
						obj[i]=item[i]
					}
				}
			});
			return obj;
		}
		return getExtend([range,purpose,mater,spray,color,type]);
		// 拼接对象 ES6
		// Object.assign({},range,purpose,mater,spray,color,type)
	}
	// ajax筛选请求
	takeProdut(){
		// 商品查找请求
	    let data = 	this.getProdut();	    
		this.props.seePrice(data);
		this.props.pushfiflter();//筛选框退出
		// 设置默认
		this.props.takemoren();
	}
	render(){
		if(!this.props.show){
            return null
        }    
		return(
			<div className="filterbox iactive">
				<div className="box">
					<div className="box_l" onClick={this.props.pushfiflter}></div>
					<div className="box_r">
						<div className="box_top">筛选</div>
						<div className="box_content clearfix">
							<div className="filter-row on">
							    <div className="centerflex tit" data-action="filter-toggle">
							        <div className="filter_col">按价格</div>
							        <span className="filter_cor iconfont icon-icon07 takedeg"></span>
							    </div>
							    <div className="cont clearfix">
							    	{
							    		priceArr.map(function(ele,idx){
							    			return <div className="item">
							    				<label className="tag">
							    				<input type="radio" value="0" />
							    				<a className={this.needsclickClass(idx)} 
							    				onClick={()=>{this.setState({ needsclick: idx })}}>{ele}
							    				</a></label>
											</div>
							    		}.bind(this))
							    	}
							    </div>
							</div>
							<div className="filter-row on">
							    <div className="centerflex tit" data-action="filter-toggle">
							        <div className="filter_col">按用途</div>
							        <span className="filter_cor iconfont icon-icon07 takedeg"></span>
							    </div>
							    <div className="cont">
							    	{
							    		purposeArr.map(function(ele,idx){
							    			return <div className="item">
							    				<label className="tag">
							    				<input type="radio" value="0" />
							    				<a className={this.purposeclickClass(idx)} 
							    				onClick={()=>{this.setState({ purposeclick: idx })}}>{ele}
							    				</a></label>
											</div>
							    		}.bind(this))
							    	}
							    </div>
							</div>
							<div className="filter-row on">
							    <div className="centerflex tit" data-action="filter-toggle">
							        <div className="filter_col">按花材</div>
							        <span className="filter_cor iconfont icon-icon07 takedeg"></span>
							    </div>
							    <div className="cont">
							    	{
							    		materArr.map(function(ele,idx){
							    			return <div className="item">
							    				<label className="tag">
							    				<input type="radio" value="0" />
							    				<a className={this.materclickClass(idx)} 
							    				onClick={()=>{this.setState({ materclick: idx })}}>{ele}
							    				</a></label>
											</div>
							    		}.bind(this))
							    	}
							    </div>
							</div>
							<div className="filter-row on">
							    <div className="centerflex tit" data-action="filter-toggle">
							        <div className="filter_col">按枝数</div>
							        <span className="filter_cor iconfont icon-icon07 takedeg"></span>
							    </div>
							    <div className="cont">
							    	{
							    		sprayArr.map(function(ele,idx){
							    			return <div className="item">
							    				<label className="tag">
							    				<input type="radio" value="0" />
							    				<a className={this.sprayclickClass(idx)} 
							    				onClick={()=>{this.setState({ sprayclick: idx })}}>{ele}
							    				</a></label>
											</div>
							    		}.bind(this))
							    	}
							    </div>
							</div>
							<div className="filter-row on">
							    <div className="centerflex tit" data-action="filter-toggle">
							        <div className="filter_col">按颜色</div>
							        <span className="filter_cor iconfont icon-icon07 takedeg"></span>
							    </div>
							    <div className="cont">
							    	{
							    		colorArr.map(function(ele,idx){
							    			return <div className="item">
							    				<label className="tag">
							    				<input type="radio" value="0" />
							    				<a className={this.colorclickClass(idx)} 
							    				onClick={()=>{this.setState({ colorclick: idx })}}>{ele}
							    				</a></label>
											</div>
							    		}.bind(this))
							    	}
							    </div>
							</div>	
							<div className="filter-row on">
							    <div className="centerflex tit" data-action="filter-toggle">
							        <div className="filter_col">按类型</div>
							        <span className="filter_cor iconfont icon-icon07 takedeg"></span>
							    </div>
							    <div className="cont">
							    	{
							    		typeArr.map(function(ele,idx){
							    			return <div className="item">
							    				<label className="tag">
							    				<input type="radio" value="0" />
							    				<a className={this.typeclickClass(idx)} 
							    				onClick={()=>{this.setState({ typeclick: idx })}}>{ele}
							    				</a></label>
											</div>
							    		}.bind(this))
							    	}
							    </div>
							</div>																										
						</div>
						<div className="footer">
				            <a href="javascript:;" className="btn reset" 
				            onClick={this.clearaneeds.bind(this)}>清除筛选条件</a>
				            <Link to={{pathname:"goods/:id"+'goods',query:this.getProdut()}}
				            onClick={this.takeProdut.bind(this)} 
							className="btn confirm">确定</Link>
				        </div>
					</div>
				</div>
			</div>
		);
	}
}


const mapStateToProps = state => ({
    filter:state.goods.filter,
    
})
export default connect(mapStateToProps, goodsActions)(FilterComponent)

