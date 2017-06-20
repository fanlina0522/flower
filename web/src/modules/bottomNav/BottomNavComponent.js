import React, {Component} from 'react'
import {connect} from 'react-redux'
import './btmNavComponent.scss'
import '../../static/font/iconfont.css'
class BottomNavComponent extends React.Component{
	render(){
		return(
			<div id='footer'>
				<ul>
					<li className="bottomActive">
						<i className="iconfont icon-shouye-shouye"></i>
						<span>首页</span>
					</li>
					<li>
						<i className="iconfont icon-fenlei1"></i>
						<span>分类</span>
					</li>
					<li>
						<i className="iconfont icon-gouwuche2"></i>
						<span>购物车</span>
					</li>
					<li>
						<i className="iconfont icon-wode"></i>
						<span>我的</span>
					</li>
				</ul>
			</div>
		)
	}
}
export default BottomNavComponent;