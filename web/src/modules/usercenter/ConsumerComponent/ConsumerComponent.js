import React,{Component} from 'react'
import './ConsumerComponent.scss'

import Ucheader2Component from '../Ucheader2Component/Ucheader2Component'

class ConsumerComponent extends Component{
	componentDidMount(){
		this.refs.head.refs.name.innerHTML = '消费总金额'
	}
	hide(event){
		if(event.target.tagName !='A'){
			this.refs.head.refs.nav.style.display = 'none'
		}
	}
	render(){
		return (
			<div className='consumer' onClick={this.hide.bind(this)}>
				<Ucheader2Component ref='head'/>
				<div className="mui-content">
					<div className="ui-box wallet-ac">
				        您当前帐户累计消费总金额：
				        <div className="price">人民币：<span className="num">0</span>元</div>
				        <hr/>
				        <label>说明：</label>
				        <div>
				            <span className="num">
				                （1）您在订花派（www.dinghuapai.cn）累计消费金额满500元，预订鲜花可享受9折优惠。
				            </span>
				        </div>
				        <div>
				            <span className="num">
				                （2）优惠券可抵现金使用。
				            </span>
				        </div>
				    </div>
			    </div>
			</div>

			)
	}
}

export default ConsumerComponent