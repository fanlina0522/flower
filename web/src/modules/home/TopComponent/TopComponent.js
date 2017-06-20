import React, {Component} from 'react'
import {connect} from 'react-redux'
import './TopComponent.scss'

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

class TopComponent extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            searchName:'',
        };
    }
    setvalue(event){
    	this.setState({searchName:event.target.value})
    }
	render(){
		return(
			<div id="header">
				<Link to="index">
					<i className='iconfont icon-f1 logo'></i>
					<span className='logoName'>订花</span>
				</Link>
				<span className='sch-box'>
					<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
					<i className="iconfont icon-sousuo_sousuo serchBtn"></i></Link>
					<input id="search_key" onChange={this.setvalue.bind(this)}
					 className="schinput" type="search" placeholder="请输入关键词" />
				</span>
			</div>
		)
	}
}
export default TopComponent;