import React, {Component} from 'react'
import {connect} from 'react-redux'
import './TitleTopComponent.scss'
import BottomNavComponent from '../home/bottomNav/BottomNavComponent'

class TitleTopComponent extends React.Component{
	 constructor(props){
        super(props)
        this.state = {
            gobottom:'none',
        }
    }
	 //点击返回上一页
    goBcak(){
        window.history.back();
    }
    //点击导航显示
    showDaohang(){
        if (this.state.gobottom == 'none') {
            this.setState({gobottom:'block'});
        }else if (this.state.gobottom == 'block') {
            this.setState({gobottom:'none'});
        }
        console.log(this.state.gobottom)
    }
	render(){
		// console.log(this.props.title)
		return (
			<div className="titletop">
				<div className="detail-top">                       
	                <i className="iconfont icon-jiantou-copy" onClick={this.goBcak}></i>
	                <span>{this.props.title}</span>
	                <span className="detail-daohang" onClick={this.showDaohang.bind(this)}><i className="iconfont icon-lisimoshicaidandaohang"></i></span>
	            </div>
				<div className="goBottom" style={{display:`${this.state.gobottom}`}}><BottomNavComponent/></div>
            </div>
		)
	}
}	

export default TitleTopComponent ; 