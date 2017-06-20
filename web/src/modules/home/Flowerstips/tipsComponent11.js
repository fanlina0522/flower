import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
import './tipsComponent.scss';
class TipsComponent11 extends React.Component{
	backHandle(){
                window.history.back();
    }
	render(){
		return(
			<div id='tips'>
				<div className='fhead'>
					<i className="iconfont icon-jiantou-copy" onClick={this.backHandle}></i>
					<span>送花礼仪，你知道多少</span>
				</div>	
				<div className='content'>
					<br/><h3>送花礼仪，你知道多少</h3><br/>
					<p>送鲜花是生活中比较常见的现象，不同的鲜花代表的寓意也各不相同，不同的节日鲜花的选择也大有差异，怎样选花才更好呢，一起来看看吧：</p><br/>
					<p>母亲节～并不限于送康乃馨，如桔梗科的风铃草、海芧、土耳其桔梗、蕾丝花、熏衣草、香水百合、玫瑰等都是不错的礼物哦。</p><br/>
					<p>父亲节～花语中含有威严意味的百合、飞燕草等蓝色系的花，或应时节的紫阳花等，都是合宜。不过选择父亲喜欢的当然是最好不过了。</p><br/>
					<p>圣诞节～圣诞蔷薇、圣诞红、海芧都是不错的选择。</p><br/>
					<p>圣诞节～圣诞蔷薇、圣诞红、海芧都是不错的选择。
      				教师节～给老师送花可以送康乃馨，但不要花束的，最好是花篮里插上的康乃馨，配上  其他的如太阳花等配花、配草，另外给老师送水果篮也很不错，还有一盆绿色植物也很好。</p><br/>
					<p>开店开业～大多以桌上型的为主，不过大部分的人都喜欢赠送排列在花篮里的花作为祝贺之用。适合花朵硕大华丽的花。如洋兰、玫瑰、康乃馨、大丁草等都非常合宜。</p><br/>
					<p>情人节～不妨利用和自己心情吻合的花语来表情达意最好。下面介绍几个看看：爱丽丝─爱的讯息，秋牡丹─苦涩的爱，风信子─不变的爱情。</p><br/>
					<p>七夕～这一天送玫瑰花当然是最普遍的啰～桔梗也是十分贴切的。</p><br/>
					<p>元旦～元旦送花不要仅仅送玫瑰花，最好也有百合花，再搭配上其他的如火鹤等会显得更加漂亮、热情，即使是玫瑰花也要用不同颜色的玫瑰花.</p><br/>
					<p>乔迁～适合送稳重高贵的花木</p><br/>
					<p>生日～适合送诞生花最贴切</p><br/>
					<p>毕业～色彩绚丽的香豌豆花是不错的选择</p><br/>

					<br/>
				</div>
			</div>		
		)
	}
}
export default TipsComponent11;