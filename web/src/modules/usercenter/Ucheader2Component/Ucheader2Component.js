import React,{Component} from 'react'
import './Ucheader2Component.scss'
import {Link} from 'react-router'

class Ucheader2Component extends Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}
	dio(event){
		let clsName = event.target.classList.contains('mui-icon-save')
		if(clsName){
			this.refs.diotips.classList.add('ad-popup-in')
			this.refs.diobg.style.display = 'block'
		}else{
			this.refs.nav.style.display = 'block'
		}
	}
	hidebg(event){
		this.refs.diobg.style.display = 'none'
		this.refs.diotips.classList.remove('ad-popup-in')
	}
	render(){
		return (
			<div>
				<header className="mui-bar2 mui-bar-nav2">
					<h1 className="mui-title2" ref="name">{this.props.title}</h1>
					<span onClick={()=>window.history.back()} className="mui-icon mui-icon-left-nav mui-pull-left"></span>
					<a className="mui-icon2 mui-icon-bars mui-pull-right" ref='icon' onClick={this.dio.bind(this)}></a>

					<div className="ad-popup"  ref='diotips' >
					    <div className="mui-popup-inner">
						    <div className="mui-popup-title">提示</div>
						    <div className="mui-popup-text">信息已保存！</div>
					    </div>
					    <div className="mui-popup-buttons">
						    <span className="mui-popup-button" onClick={this.hidebg.bind(this)}>否</span>
						    <span className="mui-popup-button mui-popup-button-bold" onClick={this.hidebg.bind(this)}>是</span>
					    </div>
				    </div>
				    <div className="mui-popup-backdrop mui-active" style={{display:'none'}} ref='diobg'></div>

				</header>
				<div className='textnav' style={{display:'none'}} ref='nav'>
					<div id="topPopover1" className="ad-popover mui-active">
					<div className="ad-popover-arrow"></div>
					<div className="" >
						<div className="mui-scroll1" style={{transform: 'translate3d(0px, 0px, 0px) translateZ(0px)'}}>
							<ul className="ad-table-view" >
								<li className="mui-table-view-cell">
									<Link to='/index'><i className="iconfont icon-shouye-shouye"></i><span>主页</span></Link>
								</li>
								<li className="mui-table-view-cell"><Link to='/list'><i className="iconfont icon-fenlei1"></i><span>列表</span></Link>
								</li>
								<li className="mui-table-view-cell"><Link to='/car'><i className="iconfont icon-gouwuche2"></i><span>购物车</span></Link>
								</li>
								<li className="mui-table-view-cell"><Link to='/usercenter'><i className="iconfont icon-wode"></i><span>个人中心</span></Link>
								</li>
							</ul>
						</div>
					<div className="mui-scrollbar mui-scrollbar-vertical"><div className="mui-scrollbar-indicator"></div></div></div>

				</div>
				</div>
				

			</div>	
			)
	}
}

export default Ucheader2Component

