import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
import './tipsComponent.scss';
class TipsComponent5 extends React.Component{
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
					<h2>鲜花礼仪之十二种场合的送花礼仪</h2>
					<p></p><br/>
					<p></p><br/>
					<p></p><br/>
					<p></p><br/>
					<p></p><br/>
					<p></p><br/>
					<p></p><br/>
					<p></p><br/>
					<p></p><br/>
					<p></p><br/>
					<p></p><br/>
					<p></p><br/>
					<p></p><br/>
					<br/>
				</div>
			</div>		
		)
	}
}
export default TipsComponent5;