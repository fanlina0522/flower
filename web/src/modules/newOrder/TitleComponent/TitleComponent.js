import React,{Component} from 'react'
import './title.scss'
class TitleComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <div className="common-top">
                    <i className="iconfont icon-jiantou-copy" onClick={()=>{window.history.back()}}></i>
                    <span>{this.props.title}</span>
                </div>
        )
    }
}

export  default TitleComponent