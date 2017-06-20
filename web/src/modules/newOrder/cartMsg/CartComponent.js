import React,{Component} from 'react'

import './cart.scss'
import TitleComponent from "../TitleComponent/TitleComponent";

class CartComponent extends Component{
    cartMsg(){
        window.localStorage.removeItem('cart_msg');
        let cartMsg = this.refs.cart.value;
        window.localStorage.setItem('cart_msg',JSON.stringify(cartMsg));

        window.location.href = '#/newOrder';
    }
    render(){
        return(
            <div className="cart-container">
                <TitleComponent title={'贺卡信息填写'}/>
                <div className="cart-main">
                    <textarea name="cart_msg" id="cart" placeholder="祝福语内容+署名" ref="cart"></textarea>
                    <div className="btn_sure" onClick={this.cartMsg.bind(this)}>确定</div>
                </div>
            </div>
        )
    }
}

export  default CartComponent