import React, {Component} from 'react'
import {connect} from 'react-redux';


let goodUrl = require('../../static/imgs/goods1.png');

var data=[{"_id":{"$oid":"593f5a37d39abf145c09353b"},"bid":"12195","name":"爱与诚/99朵香槟玫瑰","details":"爱与诚/99朵香槟玫瑰","price":"520","material":"99朵香槟玫瑰","flower":"终于等到你，还好没放弃，感谢岁月让我们相遇，让我沉醉在你的眼眸里。我想这样一直陪伴你，为你阻挡风雨","provide":"免费附送精美贺卡，代写您的祝福。（您下单时可填写留言栏)","Distribution":"全国（可配送至全国1000多城市，市区免配送费）","hot":"1","class_price":["200-299元"],"class_use":["生日鲜花"],"class_object":["送父母"],"class_flower":["百合"],"class_num":["10枝"],"class_color":["白色"],"class_type":["高端混搭花束"],"big_img":"b_01.png","small_img":["b_02.png","b_03.png"],"details_img":["b_04.jpg","b_05.jpeg"]},
{"_id":{"$oid":"593f5ac1d39abf145c09353c"},"bid":"12199","name":"天长地久/33朵玫瑰 ","details":"天长地久/33朵玫瑰 ","price":"289","material":"33朵玫瑰（红、白、粉玫瑰）拼成520字样，蓬莱松或者黄莺间插。","flower":"遇见你在最美的时刻，愿能永远呵护你，直到白头。","provide":"免费附送精美贺卡，代写您的祝福。（您下单时可填写留言栏)","Distribution":"全国（可配送至全国1000多城市，市区免配送费）","hot":"1","class_price":["199元以内"],"class_use":["爱情鲜花"],"class_object":["送朋友"],"class_flower":["玫瑰"],"class_num":["9枝"],"class_color":["红色"],"class_type":["单品花束"],"big_img":"a_01.png","small_img":["a_02.png","a_03.jpeg"],"details_img":["a_04.jpeg","a_05.jpeg"]},
{"_id":{"$oid":"593f5cd3d39abf145c09353e"},"bid":"12117","name":"只是爱着你/33枝极品香槟玫瑰","details":"只是爱着你/33枝极品香槟玫瑰","price":"252","material":"精选33枝极品香槟玫瑰，绿草丰满外围点缀","flower":"人生一世，总有个追求，有个盼望，有个让自己珍视，自己向往，让自己护卫，愿意为之生活一遭，乃至为之献身的东西，这就值了。","provide":"免费附送精美贺卡，代写您的祝福。（您下单时可填写留言栏)","Distribution":"免费附送精美贺卡，代写您的祝福。（您下单时可填写留言栏)","hot":"1","class_price":["300-399元"],"class_use":["友情鲜花"],"class_object":["送长辈"],"class_flower":["康乃馨"],"class_num":["11枝"],"class_color":["粉色"],"class_type":["精品礼盒"],"big_img":"c_01.png","small_img":["c_02.jpeg","c_03.jpeg"],"details_img":["c_04.jpeg","c_05.jpg"]},
{"_id":{"$oid":"593f5de9d39abf145c09353f"},"bid":"12207","name":"春暖花开/9朵粉佳人玫瑰9朵粉色康乃馨 ","details":"春暖花开/9朵粉佳人玫瑰9朵粉色康乃馨 ","price":"286","material":"主花材9朵粉佳人玫瑰9朵粉色康乃馨1支粉色绣球3朵向日葵配花白色桔梗","flower":"暖暖的风，暖暖的阳光，春暖花开的日子，捎上我暖暖的 爱!","provide":"免费附送精美贺卡，代写您的祝福。（您下单时可填写留言栏)","Distribution":"全国（可配送至全国1000多城市，市区免配送费）","hot":"1","class_price":["400-499元"],"class_use":["周年鲜花"],"class_object":["送领导"],"class_flower":["向日葵"],"class_num":["12枝"],"class_color":["蓝色"],"class_type":["手提花篮"],"big_img":"d_01.png","small_img":["d_02.png","d_03.png"],"details_img":["d_04.jpeg","d_05.jpeg"]},
{"_id":{"$oid":"593f5f1bd39abf145c093540"},"bid":"12032","name":"缪斯女神/红玫瑰16枝","details":"缪斯女神/红玫瑰16枝","price":"166","material":"红玫瑰16枝，红豆5枝，粉色桔梗1枝，银叶菊2枝（如当地红豆缺货，用相思梅等其他寓意相近配材替代。）","flower":"世间女子有各种类型：有些温婉如诗，有些独立若兰，有些奔放不羁……你是独一无二的落入凡间的美艳缪斯。","provide":"免费附送精美贺卡，代写您的祝福。（您下单时可填写留言栏)","Distribution":"全国（可配送至全国1000多城市，市区免配送费）","hot":"1","class_price":["500-699元"],"class_use":["问候长辈"],"class_object":["送客户"],"class_flower":["满天星"],"class_num":["13枝"],"class_color":["香槟色"],"class_type":["手捧花"],"big_img":"e_01.jpeg","small_img":["e_02.jpeg","e_03.jpeg"],"details_img":["e_04.jpeg","e_05.jpg"]},
{"_id":{"$oid":"593f600cd39abf145c093541"},"bid":"12033","name":"母爱/紫红色康乃馨12枝，搭配多头粉康7枝","details":"母爱/紫红色康乃馨12枝，搭配多头粉康7枝","price":"166","material":"紫红色康乃馨12枝，搭配多头粉康7枝，适量栀子叶","flower":"没你疼爱我怎么生活，没你抚养我怎能长大，你给了我青春的年华，自己却满头白发，不负青春年华，是对你最好的报答！","provide":"免费附送精美贺卡，代写您的祝福。（您下单时可填写留言栏)","Distribution":"全国（可配送至全国1000多城市，市区免配送费）","hot":"1","class_price":["700元以上"],"class_use":["回报老师"],"class_object":["送老师"],"class_flower":["绣球"],"class_num":["14枝"],"class_color":["紫色"],"class_type":["瓶插鲜花"],"big_img":"f_01.jpeg","small_img":["f_02.jpeg","f_03.jpeg"],"details_img":["f_04.jpeg","f_05.jpeg"]}
];


var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

class BlastComponent extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            searchName:'',
        };
    }
    setvalue(event){
    	this.setState({searchName:event.target.value})
    }
    	
	render(){
		return(
			<div>
				<div className='shade'></div>
				<div className='blast-box'>
					<div className='box-hd'>
						<span>
							<i className="iconfont icon-fenlei"></i>
							<i>爆款热销</i>
						</span>
						<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
						<span>更多+</span>
						</Link>
					</div>
					<ul className="goodsList">
						{
							data.map(function(item){
								return <li><Link to={{pathname:"detail/:id"+'name',query:{name:item.name}}}>
									<div className='goodsImg'>
										<img src={`src/static/imgs/${item.big_img}`} />
									</div>
									<div>
										<p className='goodsName'>{item.name}</p>
										<p className='goodsPirce'>￥{item.price}</p>
									</div>
									</Link>
								</li>
							})
						}
					</ul>
				</div>
				
				<div className='shade'></div>
				<div className='blast-box'>
					<div className='box-hd'>
						<span>
							<i className="iconfont icon-fenlei"></i>
							<i>新品上市</i>
						</span>
						<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
						<span>更多+</span>
						</Link>
					</div>
					<ul className="goodsList">
						{
							data.map(function(item){
								return <li><Link to={{pathname:"detail/:id"+'name',query:{name:item.name}}}>
									<div className='goodsImg'>
										<img src={`src/static/imgs/${item.big_img}`} />
									</div>
									<div>
										<p className='goodsName'>{item.name}</p>
										<p className='goodsPirce'>￥{item.price}</p>
									</div>
									</Link>
								</li>
							})
						}
					</ul>
				</div>
				<div className='shade'></div>
				<div className='blast-box'>
					<div className='box-hd'>
						<span>
							<i className="iconfont icon-fenlei"></i>
							<i>为您挑选-妈妈</i>
						</span>
						<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
						<span>更多+</span>
						</Link>
					</div>
					<ul className="goodsList">
						
						{
							data.map(function(item){
								return <li><Link to={{pathname:"detail/:id"+'name',query:{name:item.name}}}>
									<div className='goodsImg'>
										<img src={`src/static/imgs/${item.big_img}`} />
									</div>
									<div>
										<p className='goodsName'>{item.name}</p>
										<p className='goodsPirce'>￥{item.price}</p>
									</div>
									</Link>
								</li>
							})
						}
					</ul>
				</div>
				<div className='shade'></div>
				<div className='blast-box'>
					<div className='box-hd'>
						<span>
							<i className="iconfont icon-fenlei"></i>
							<i>开业大吉</i>
						</span>
						<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
						<span>更多+</span>
						</Link>
					</div>
					<ul className="goodsList">
						
						{
							data.map(function(item){
								return <li><Link to={{pathname:"detail/:id"+'name',query:{name:item.name}}}>
									<div className='goodsImg'>
										<img src={`src/static/imgs/${item.big_img}`} />
									</div>
									<div>
										<p className='goodsName'>{item.name}</p>
										<p className='goodsPirce'>￥{item.price}</p>
									</div>
									</Link>
								</li>
							})
						}
					</ul>
				</div>
				
			</div>
		)
	}
}

export default BlastComponent;