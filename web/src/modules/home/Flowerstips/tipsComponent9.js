import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
import './tipsComponent.scss';
class TipsComponent9 extends React.Component{
	backHandle(){
                window.history.back();
    }
	render(){
		return(
			<div id='tips'>
				<div className='fhead'>
					<i className="iconfont icon-jiantou-copy" onClick={this.backHandle}></i>
					<span>表白适合送什么花？</span>
				</div>	
				<div className='content'>
					<br/><h3>表白适合送什么花？</h3><br/>
					<p>向女生表白，可不是一句“我爱你”就行了。女孩子需要对方认真的态度和浪漫的方式，这样才会觉得真的被爱和在乎。所以，女生往往能被送花表白的方式所打动。</p><br/>
					<p>表白适合送什么花？向女孩子表白送什么花好？</p><br/>
					<p>众所周知，表白适合送玫瑰花。但是，在送花渐成一种潮流的时候，送玫瑰就有更多的讲究了，不仅要在乎玫瑰花的朵数和颜色，还要在乎配花的档次和包装的格调。这些，无不影响着女生收到鲜花时的心情。想想，一束平常至极的玫瑰花束，还包装得毫无档次，能够给你的表白加分吗？显然不能！</p><br/>
					<p>19朵香槟玫瑰+香槟色桔梗</p><br/>
					<p>花语：“美丽而浪漫的春天是否该来了？我已等了好久……我用一辈子的时间来等够不够，够不够？”——孟庭苇的《等待花开》</p><br/>
					<p>11朵粉玫瑰+紫色洋桔梗+叶上花+相思梅</p><br/>
					<p>花语：粉黛，意指年轻貌美的女子，不期而遇往往再也无法忘怀。正如《诗经》里的浅唱低吟：“有美一人，清扬婉兮。邂逅相遇，适我愿兮。”</p><br/>
					<p>19朵红玫瑰+5枝白色紫罗兰+1枝白色绣球花+粉色洋桔梗</p><br/>
					<p>花语：“关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。”在茫茫人海里，遇上让自己怦然心动的红粉佳人，是上天的眷顾和宠爱，只有去努力追求才对得起这缘分。</p><br/>
					<p>表白适合送什么花？向女孩子表白送什么花好？遇上喜欢的女孩子并不容易，表白的时候一定不能太过随意。不需要做太多，送一束精心包装的鲜花就好。</p><br/>

					<br/>
				</div>
			</div>		
		)
	}
}
export default TipsComponent9;