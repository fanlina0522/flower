import React, {Component} from 'react'
import {connect} from 'react-redux'
import './btmNavComponent.scss'

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

let bottomarr=[['index','icon-shouye-shouye','首页'],['list','icon-fenlei1','分类'],['car','icon-gouwuche2','购物车'],['usercenter','icon-wode','我的']];
						
class BottomNavComponent extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            bottom_idx: 0,
        };
    }
    componentDidMount(){     
		let hash = hashHistory.getCurrentLocation().pathname
		if (hash=='/index') {
			this.setState({bottom_idx:0})
		}else
		if (hash=='/list') {
			this.setState({bottom_idx:1})
		}
		else if (hash=='/car') {
			this.setState({bottom_idx:2})
		}else if (hash=='/usercenter') {
			this.setState({bottom_idx:3})
		}else{
			this.setState({bottom_idx:4})
		}
    }
	// 左侧tab 高亮切换
	activeClass(idx){
		return idx===this.state.bottom_idx ? 'bottom_active' : '';
	}
	render(){
		return(
			<div id='footer'>
				<ul>
				{
					bottomarr.map(function(item,idx){
					return <li> 
								<Link to={item[0]}  className={this.activeClass(idx)}>
									<i className={`iconfont ${item[1]}`}></i>
									<span>{item[2]}</span>
								</Link>
							</li>
					}.bind(this))
					
				}
				</ul>
			</div>
		)
	}
}
export default BottomNavComponent;