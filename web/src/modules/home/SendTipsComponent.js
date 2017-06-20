import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
class SendTipsComponent extends React.Component{
	render(){
		return(
			<div className='sendTips'>
				<div className='shade'></div>
				<div className='box-hd'>
					<span>
						<i className="iconfont icon-fenlei"></i>
						<i>送花常识</i>
					</span>
					<sapn className='linkmr'>
						<Link to="/flowerstips">更多+</Link>
					</sapn>
				</div>
				<ul>
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
				</ul>
				<div className='shade'></div>
			</div>
		)
	}
}
export default SendTipsComponent;