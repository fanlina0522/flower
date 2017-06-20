import React,{Component} from 'react'

import TitleComponent from "../TitleComponent/TitleComponent"

import './advice.scss'

class AdviceComponent extends Component{
    advice(){
        window.localStorage.removeItem('advice_msg');
        let adviceMsg = this.refs.advice.value;
        console.log(adviceMsg);
        window.localStorage.setItem('advice_msg',JSON.stringify(adviceMsg));

        window.location.href = '#/newOrder';
    }
    render(){
        return(
            <div className="advice-container">
                <TitleComponent title={'给商家留言'}/>
                <div className="advice-main">
                    <div>
                        <textarea name="advice" id="advice_x" placeholder="给商家留言" ref="advice"></textarea>
                    </div>
                    <div className="btn_sure" onClick={this.advice.bind(this)}>确定</div>
                </div>
            </div>
        )
    }
}

export  default AdviceComponent