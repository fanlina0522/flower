import React, {Component} from 'react'
import {connect} from 'react-redux'
class BottComponent extends React.Component{
	render(){
		return(
			<div className='bott'>
				<div className='cu-logo'>
					<ul className='cu-list'>
						<li>
							<i className="iconfont icon-xianhua"></i>
							<span>新鲜花材</span>
						</li>
						<li>
							<i className="iconfont icon-chengxin"></i>
							<span>诚信可靠</span>
						</li>
						<li>
							<i className="iconfont icon-liwu"></i>
							<span>1-3小时送花</span>
						</li>
						<li>
							<i className="iconfont icon-mianfei"></i>
							<span>200%退款承诺</span>
						</li>
					</ul>
				</div>
				<div className='bott-msg'>
					<div className='bott-tel'>
						<i className="iconfont icon-dianhua"></i>
						<span>24小时订花热线：</span>
						<span className='f-tel'>400-888-8888</span>
					</div>
					<p className='copyright'>Copyright© 2009-2017 XXX 版权所有</p>
				</div>
				<div className='shade'></div>
			</div>
		)
	}
}
export default BottComponent;