import React,{Component} from 'react'
import './EmtryComponent.scss'

class EmtryComponent extends Component{
	render(){
        // if(!this.props.show){
        //     return null
        // } 
		return (
			<div className="order-contents"> 
                <img src="src\static\imgs/order-empty.png" alt=""/>
                <div className="mui-scroll">
                    <div className="mui-pull-bottom-tips">
                        <div className="mui-pull-bottom-wrapper">
                            <span className="mui-pull-loading">没有更多数据了
                            </span>
                        </div>
                    </div>
                </div>

            </div>
			)
	}
}

export default EmtryComponent