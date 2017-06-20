import React, {Component} from 'react'
import {connect} from 'react-redux'
import'../../static/styles/common.scss'
import'./home.scss'
import TopComponent from './TopComponent/TopComponent'

import'../../static/font/iconfont.css'
import HmainComponent from './HmainComponent'
import BottomNavComponent from './bottomNav/BottomNavComponent'


class HomeComponent extends React.Component {
	render(){
		return(
			<div className='home'>
				<TopComponent/>
				<HmainComponent/>
				<BottomNavComponent props={this.props}/>
			</div>
		)
	}
}

export default HomeComponent;