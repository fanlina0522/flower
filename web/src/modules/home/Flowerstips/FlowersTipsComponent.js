import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
import './FlowersTipsComponent.scss'
class FlowersTipsComponent extends React.Component{
	backHandle(){
        window.history.back();
    }
	render(){
		return(
			<div id='tips'>
				<div className='fhead'>
					<i className="iconfont icon-jiantou-copy" onClick={this.backHandle}></i>
					<span>送花常识</span>
				</div>
				<ul className='content'>
					<li>
						<Link to="/tips1">
							<span>送花卡片如何写？贺卡这么写最感人</span>
							<i className="iconfont icon-icon07"></i>
						</Link>
					</li>
					<li>
						<Link to="/tips2">
							<span>不同颜色和枝朵的百合有不同意义</span>
							<i className="iconfont icon-icon07"></i>
						</Link>
					</li>
					<li>
						<Link to="/tips3">
							<span>情人节送花注意事项</span>
							<i className="iconfont icon-icon07"></i>
						</Link>
					</li>
					<li>
						<Link to="/tips4">
							<span>鲜花礼仪之十二种场合的送花礼仪</span>
							<i className="iconfont icon-icon07"></i>
						</Link>
					</li>
					<li>
						<Link to="/tips5">
							<span>送花的艺术 -我国送花习俗</span>
							<i className="iconfont icon-icon07"></i>
						</Link>
					</li>
					<li>
						<Link to="/tips6">
							<span>如何挑花送人？</span>
							<i className="iconfont icon-icon07"></i>
						</Link>
					</li>
					<li>
						<Link to="/tips7">
							<span>粉色百合花语是什么？</span>
							<i className="iconfont icon-icon07"></i>
						</Link>
					</li>
					<li>
						<Link to="/tips8">
							<span>女孩都喜欢别人送鲜花吗？</span>
							<i className="iconfont icon-icon07"></i>
						</Link>
					</li>
					<li>
						<Link to="/tips9">
							<span>表白适合送什么花？ </span>
							<i className="iconfont icon-icon07"></i>
						</Link>
					</li>
					<li>
						<Link to="/tips10">
							<span>11朵玫瑰代表什么意思？</span>
							<i className="iconfont icon-icon07"></i>
						</Link>
					</li>
					<li>
						<Link to="/tips11">
							<span>送花礼仪，你知道多少</span>
							<i className="iconfont icon-icon07"></i>
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}
export default FlowersTipsComponent;