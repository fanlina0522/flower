import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
import './tipsComponent.scss';
class TipsComponent7 extends React.Component{
	backHandle(){
                window.history.back();
    }
	render(){
		return(
			<div id='tips'>
				<div className='fhead'>
					<i className="iconfont icon-jiantou-copy" onClick={this.backHandle}></i>
					<span>粉色百合花语是什么？</span>
				</div>	
				<div className='content'>
					<br/><h3>粉色百合花语是什么？</h3><br/>
					<p>百合花，花色艳丽丰富，花形典雅大方，花朵皎洁无疵，
					花香清香宜人。受到百合花祝福的人具有清纯天真的性格，
					集众人宠爱于一身，不过光凭这一点并不能平静度过一生，
					必须具备自制力，抵抗外界的诱惑，才能保持不被污染的纯真。
        			在很多人的心里，都对百合花有一种特别的感觉，喜欢它的清丽脱俗，
        			喜欢它的纯洁无暇，喜欢它的看似柔弱……所以，
        			在向喜欢的女孩子表达爱慕之情的时候，百合也是频频出场。</p><br/>
					<p>百合花有几种花色，常见的有白色百合花、粉色百合花、
					黄色百合花。它们的美给人的感觉都不一样，白色百合花胜在纯洁无暇，
					黄色百合花胜在热情温暖，粉色百合花胜在甜美梦幻。</p><br/>
					<p>当然，各色百合花的花语也不一样，粉色百合花语是什么？
					粉色百合花象征什么？粉色百合花有什么含义？</p><br/>
					<p>粉色百合花语是纯洁、可爱，粉色百合花象征清纯、高雅，
					粉色百合花代表着梦幻、娇柔和甜美。
					因此，粉色百合花比较容易受到甜美、可爱的女孩子喜欢。
					如果，你正在追求的女生或者女朋友属于甜美、可爱类型的话，
					就可以在情人节等重要的日子里，送她粉色百合花束，
					或许比玫瑰更容易打动她，比如以下这些美丽的粉色百合花束。</p><br/>
					<br/>
				</div>
			</div>		
		)
	}
}
export default TipsComponent7;