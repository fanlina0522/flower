import React,{Component} from 'react'

import TitleComponent from "../TitleComponent/TitleComponent";
import './flower.scss'

class FlowerComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            tab: [
                {tabName: "不需要",id: 1},
                {tabName: "需要", id: 2},
            ],
            currentIndex: 1,
        }
    }

    tabChoiced(id){
        this.setState({
            currentIndex:id
        });
    }
    flowerMsg(){
        window.localStorage.removeItem('flower_msg');
        let status = this.state.currentIndex== 1?true:false;
        if(status){
            let _msg = {flowerMsg:'不需要'}
            window.localStorage.setItem('flower_msg',JSON.stringify(_msg));
        }else{
            let msg = {flowerMsg:'需要'}
            window.localStorage.setItem('flower_msg',JSON.stringify(msg));
        }

        window.location.href = '#/newOrder';
    }
    render(){
        return(
            <div className="flower-container">
                <TitleComponent title={'花瓶选择'}/>
                <div className="flower-main">
                    {
                        this.state.tab.map(function(res,index){
                            let tabStyle = res.id==this.state.currentIndex ? 'iconfont icon-icon': 'iconfont icon-circle';
                            return    <div key={index} onClick={this.tabChoiced.bind(this,res.id)} id="check">{res.tabName}<span id="span_icon" className={tabStyle}></span></div>

                        }.bind(this))
                    }
                    <div className="btn_sure" onClick={this.flowerMsg.bind(this)}>确定</div>
                </div>
            </div>
        )
    }
}

export  default FlowerComponent