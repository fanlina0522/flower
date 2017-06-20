import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
import './tipsComponent.scss';
class TipsComponent10 extends React.Component{
	backHandle(){
                window.history.back();
    }
	render(){
		return(
			<div id='tips'>
				<div className='fhead'>
					<i className="iconfont icon-jiantou-copy" onClick={this.backHandle}></i>
					<span>11朵玫瑰代表什么意思？</span>
				</div>	
				<div className='content'>
					<br/><h3>11朵玫瑰代表什么意思？</h3><br/>
					<p>生活里，很多人都喜欢送女朋友11朵玫瑰。为什么11朵玫瑰这么受欢迎？11朵玫瑰代表什么意思？11朵玫瑰的寓意是什么？11朵玫瑰的花语是什么？</p><br/>
					<p>鲜花在东西方文化中基本上都被赋予了特定的内涵。在我们中国传统文化中，不少鲜花都被赋予了美好的性格特征，如牡丹象征着富人之华贵，兰花象征着君子之气节。而在西方，鲜花都有花语，比如郁金香的花语是“爱的告白、真挚情感”，康乃馨的花语是“伟大、神圣、慈祥、温馨的母爱”。</p><br/>
					<p>那么，11朵玫瑰代表什么？我们中国偏爱双数，寓意“好事成双”、“双双对对”；而花语源自西方，在他们的送花礼仪里，对数字的理解和我们不一样，每一个数字都有特定的含义，比如11就代表着“一心一意”。</p><br/>
					<p>如此，玫瑰象征着美丽、纯洁的爱情，11支玫瑰就代表“一心一意的爱”。当然，玫瑰有很多花色，红玫瑰代表“热恋”，粉玫瑰代表“永远的爱”，白玫瑰代表“纯纯的爱”，黄玫瑰代表“褪去的爱”。所以，11支红玫瑰代表的意思和11支粉玫瑰、11支白玫瑰、11支黄玫瑰代表的意思就不一样。如果是送给恋人的话，可以选择11枝红玫瑰或者11枝粉玫瑰、白玫瑰。</p><br/>
					<p>11枝玫瑰非常很受欢迎，尤其是年轻人的欢迎。最主要的原因当然是11枝玫瑰“一心一意”的美好寓意。时下，爱情变得比较脆弱，经得起时间、经得起流言、经得起诱惑的爱情越来越少，所以，向自己的女朋友表示出“一心一意爱她”的心意就显得非常必要。</p><br/>
					<p>11朵玫瑰看起来比较少，但我们可以加入配花啊，比如满天星、情人草、黄莺，只要加入了适当的配花，而且在包装上做到精美的话，11朵玫瑰可以绽放得很美丽，比如下面这款“鲜花/纯美时光”.</p><br/>

					<br/>
				</div>
			</div>		
		)
	}
}
export default TipsComponent10;