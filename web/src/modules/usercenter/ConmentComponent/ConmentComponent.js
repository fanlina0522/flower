import React,{Component} from 'react'
import './ConmentComponent.scss'

import Ucheader2Component from '../Ucheader2Component/Ucheader2Component'

class ConmentComponent extends Component{
	hide(event){
		if(event.target.tagName !='A'){
			this.refs.head.refs.nav.style.display = 'none'
		}
	}
	render(){
		return (
			<div className='conment' onClick={this.hide.bind(this)}>
				<Ucheader2Component ref='head' title = {'我的评价'}/>
				<div className="mui-pull-bottom-tips boxbody"><div className="mui-pull-bottom-wrapper"><span className="mui-pull-loading">没有更多数据了</span></div></div>
			</div>

			)
	}
}

export default ConmentComponent