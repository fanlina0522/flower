import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
import './tipsComponent.scss';
class TipsComponent4 extends React.Component{
	backHandle(){
                window.history.back();
    }
	render(){
		return(
			<div id='tips'>
				<div className='fhead'>
					<i className="iconfont icon-jiantou-copy" onClick={this.backHandle}></i>
					<span>鲜花礼仪之十二种场合的送花礼仪</span>
				</div>	
				<div className='content'>
					<br/><h3>鲜花礼仪之十二种场合的送花礼仪</h3><br/>
					<p>鲜花,是一种高雅的礼品,通过赠花来表达微妙的感情和心愿,
					确是别有一番意境,如果懂得一些送花意义及技巧会更加恰到好处：</p><br/>
					<p>1.给亲友生日送花,对青年人可送玫瑰,月季,
					中年人可送兰花或茶花,老年人祝寿可送万年青,榕树象征长寿。</p><br/>
					<p>2.给新婚夫妻赠花,最好送玫瑰花或月季花。</p><br/>
					<p>3.给恋人赠花适宜送红玫瑰花,蔷薇花,丁香花或蝴蝶兰。</p><br/>
					<p>4.友人乔迁之喜赠花可送大方之仙人掌花,寓意乔迁顺利,万事如意。</p><br/>
					<p>5.给病人赠送野百花,是希望早日康复。</p><br/>
					<p>6.送工商界朋友赠花,可用杜鹃花,大丽花,象征前程万里,事业发达。</p><br/>
					<p>7.新春佳节可送金桔,水仙,百合,状元红,万年青表达美好的祝愿。</p><br/>
					<p>8.情人节送红玫瑰,郁金香。</p><br/>
					<p>9.父亲节送红莲花,可斛花。</p><br/>
					<p>10.母亲节送康乃馨。</p><br/>
					<p>11.教师节送剑兰,菊花。</p><br/>
					<p>12.芍药花代表离别惦念之意。</p><br/>
					<br/>
				</div>
			</div>		
		)
	}
}
export default TipsComponent4;