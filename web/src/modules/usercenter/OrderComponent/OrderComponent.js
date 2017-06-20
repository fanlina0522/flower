import React,{Component} from 'react'
import'./OrderComponent.scss' 
import {Router, Route, hashHistory, Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Tapcomponent from '../Tapcomponent/Tapcomponent'
import TabsExampleSwipeable from '../Tapcomponent/Tapcomponent'
import Ucheader2Component from '../Ucheader2Component/Ucheader2Component'

class OrderComponent extends React.Component{
	componentDidMount(){
		this.refs.head.refs.name.innerHTML = "我的订单"
	}
	hide(event){
		if(event.target.tagName !='A'){
			this.refs.head.refs.nav.style.display = 'none'
		}
	}
	render(){
		return (
			<div className="order-page" onClick={this.hide.bind(this)}>
				<Ucheader2Component ref='head'/>
				<MuiThemeProvider >
					<TabsExampleSwipeable>
					</TabsExampleSwipeable>
				</MuiThemeProvider>
			</div>
				
		) 
	}
}

export default OrderComponent

