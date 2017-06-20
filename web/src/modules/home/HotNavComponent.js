import React, {Component} from 'react'
import {connect} from 'react-redux';
var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;
let navUrl1 = require('../../static/imgs/nav1.png')
let navUrl2 = require('../../static/imgs/nav1.png')
let navUrl3 = require('../../static/imgs/nav3.png')
let navUrl4 = require('../../static/imgs/nav4.png')
let navUrl5 = require('../../static/imgs/nav5.png')
let navUrl6 = require('../../static/imgs/nav6.png')
let navUrl7 = require('../../static/imgs/nav7.png')
class HotNavComponent extends React.Component{
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
			<div className="hotNav">
				<div className="hotItem">
				<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
					<div className="ico">
						<img src={navUrl1}/>
					</div>
					<div className="ellText">爱情鲜花</div>
				</Link>
				</div>
				<div className="hotItem">
				<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
					<div className="ico">
						<img src={navUrl1}/>
					</div>
					<div className="ellText">99朵示爱</div>
					</Link>
				</div>
				<div className="hotItem">
				<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
					<div className="ico">
						<img src={navUrl3}/>
					</div>
					<div className="ellText">全部鲜花</div>
					</Link>
				</div>
				<div className="hotItem">
				<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
					<div className="ico">
						<img src={navUrl4}/>
					</div>
					<div className="ellText">生日鲜花</div>
					</Link>
				</div>
				<div className="hotItem">
				<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
					<div className="ico">
						<img src={navUrl5}/>
					</div>
					<div className="ellText">探病慰问</div>
					</Link>
				</div>
				<div className="hotItem">
				<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
					<div className="ico">
						<img src={navUrl6}/>
					</div>
					<div className="ellText">开业鲜花</div>
					</Link>
				</div>
				<div className="hotItem">
				<Link to={{pathname:"goods/:id"+'name',query:{name:`${this.state.searchName}`}}}>
					<div className="ico">
						<img src={navUrl7}/>
					</div>
					<div className="ellText">企业用花</div>
					</Link>
				</div>
			</div>
		)
	}
}
export default HotNavComponent