import React,{Component} from 'react'
import './TapListComponent.scss'
import {connect} from 'react-redux'
import * as TapListAction from './TapListAction'

import SpinnerComponent from '../../spinner/SpinnerComponent'
import EmtryComponent from '../EmtryComponent/EmtryComponent'


// this.props.array.map(function(tiem)){}

class TapListComponent extends Component{
    constructor(props){
        super(props)
        this.props.array = []
    }
    componentWillMount(){
        let listId  = 0
        this.props.getData(listId)
    }
	render(){
        return(
            <ul>
                {
                this.props.array.map(function(item,index){
                    return (<li className="order-li" key={index}>
                        <a >
                            <div className="hd ui-border-b">
                                <div className="tit">订单编号:{item.bid}</div> 
                                <div className="text-danger">待付款</div>  
                            </div>
                        </a>
                        <div className="tapgoods ui-border-b">
                            <div className="figure">
                                <a >
                                    <img className="imgIcon" src={'src/static/imgs/'+ item.small_img[0]}/>
                                </a>
                            </div>
                            <div className="cnt">
                                <a >
                                    <div className="name">{item.name}</div>
                                </a>
                            </div>
                            <a >
                                <div className="info">
                                    <div className="price">￥{item.price}元</div>
                                    <div className="num">X1</div>
                                </div>
                            </a>
                        </div>
                        <div className="ft">
                            <a >
                                <div className="total">
                                    <div className="num">共1件商品</div>
                                    <div className="price">合计：{item.price}</div>
                                </div>
                            </a>
                            <div className="btns">
                                <span className="btn ui-btn-minor bordered">取消订单</span>
                                <a className="btn ui-btn-primary bordered">去付款</a>
                            </div>
                        </div>
                        </li>)
                    })
                }
                <EmtryComponent />
                <SpinnerComponent show={this.props.loading}/>
            </ul>
        )  
		
        
	}
}

//绑定更新后的数据
const mapStateToProps = state => ({
    array:state.taplist.array,
    loading:state.taplist.loading
})

export default connect(mapStateToProps, TapListAction)(TapListComponent)


