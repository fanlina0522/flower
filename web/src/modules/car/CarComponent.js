import React,{Component} from 'react'
import TitleTopComponent from '../TitleTopComponent/TitleTopComponent'

import {connect} from 'react-redux'
import './car.scss'

import * as CarAction from './CarAction'

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

class CarComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            empty:'none',
            hasgoods:'block',
            totalprice:Number(0),
            totalqty:Number(0),
            gobottom:'none',
        }
    }
    componentWillMount(){        
        //发起一个请求，读取购物车集合
        this.props.getCar().then(response=>{

            if (response.lastFetched) {
                this.empty();
                this.move();
            }
        });
    }
    componentDidMount(){        

    }

    // 无商品 显示去逛逛
    empty(){       
        if(!this.props.cardata.length){
            this.setState({empty:'block',
                hasgoods:'none'})
        }else{
            this.setState({empty:'none',
                hasgoods:'block'})
        }
    }

    // 写入 总价 与数量
    move(){
        // 初始化
        this.state.totalprice = 0;
        this.state.totalqty = 0;
        // 计算总价         计算合计数量
        this.props.cardata.map(function(item){
            let totalprice = 0;let totalqty = 0;
            totalprice += (parseInt(item.price))*item.qty;
            totalqty += parseInt(item.qty);
            this.setState({totalprice: this.state.totalprice +=totalprice});
            this.setState({totalqty: this.state.totalqty +=totalqty});             
        }.bind(this));
    }
    //删除购物车里的单个商品
    remove(data){
        //将商品的编号为查询条件
        this.props.delGoods(data).then(response=>{
            this.props.getCar().then(response=>{
                if (response.lastFetched) {
                    this.empty();
                    this.move();
                }
            });
        });
        // this.props.removecar();
    }
    // 更改 商品数组 并更改本地存储 商品数组
    modifygoodsarr(){

        this.move();//移除数组商品信息后再写入
        // window.localStorage.removeItem('goodsList');
        // window.localStorage.setItem('goodsList',JSON.stringify(this.state.goodsarr));
    }
    // 减少单个商品的数量
    qtyminus(name,event){        
        if (event.target.nextSibling.value>1) {
            this.props.cardata.map(function(item){
                if (name == item.name) {
                    item.qty--;
                }
            });
            this.move();
        }                 
    }
    // 增加单个商品的数量
    qtyplus(name,event){
        this.props.cardata.map(function(item){
            if (name == item.name) {
                item.qty++;
            }
        });
       this.move();
    }
    //购物车为空，点击跳转到'#/list'
    goList(){
        window.location.href = '/#list';
    }
    //跳转到填写订单页
    goPay(){
        //将数据存入本地存贮
        window.localStorage.removeItem('goodsList');
        window.localStorage.setItem('goodsList',JSON.stringify(this.props.cardata));

        let user_statue = JSON.parse(window.localStorage.getItem('data'));

        if(user_statue === null){
            alert('您还没有登录，点击确定登录');
            window.location.href = '/#login';
        }else{
            window.location.href = '/#newOrder';
        }
    }
    render(){
        return(
            <div className="car-container">
                <div className="car-header">
                    <TitleTopComponent title={'购物车'}/>
                </div>
                <div className="car-main">
                    <div className="car-empty" style={{display:`${this.state.empty}`}}>
                        <div className="car-empty-div" >
                            <i className="iconfont icon-gouwuche2 car-pic"></i>
                            <div>购物车还没有任何商品</div>
                            <button className="car-golist" onClick={this.goList.bind(this)}>去逛逛</button>
                        </div>
                        <div className="car-footer">
                            <div className="car-totalprice">合计：<span className="car-total">0.00</span>元</div>
                            <div className="car-balance" >去结算(<span className="car-totalqty">0</span>)</div>
                        </div>
                    </div>
                    <div className="car-hasgoods" style={{display:`${this.state.hasgoods}`}}>
                        <div className="car-goods-list">
                            <ul className="car-goods-ul">
                                {
                                    this.props.cardata.map(function(item,index){
                                        return <li className="car-list-li" ref="list_li" data-id={item.id}>
                                            <div className="car-list-left">
                                                <Link className="car_item_a" to={{pathname:"detail/:id"+'name',query:{name:item.name}}}>
                                                    <img className="car_item_img" src={`src/static/imgs/${item.url}`}/>
                                                </Link>
                                            </div>
                                            <div className="car-list-right">
                                                <div className="car-goods-name">
                                                    名称：<span className="car_goodsName">{item.name}</span>
                                                </div>
                                                <div className="car-goods-qty">
                                                    数量：
                                                    <div className="car-btn-box">
                                                        <button className="car-btn-minus" onClick={this.qtyminus.bind(this,item.name)}>-</button>
                                                        <input  type="number" className="car-btn-qty" ref={'num'+index} style={{margin:'0','padding':'0 15px'}}value={item.qty}/>
                                                        <button className="car-btn-plus" onClick={this.qtyplus.bind(this,item.name)}>+</button>
                                                    </div>
                                                    <i className="iconfont icon-shanchu  carList-del" onClick={this.remove.bind(this,{id:item.id})}></i>
                                                </div>
                                                <div className="car-goods-price">
                                                    价格：<span className="car_goodsPrice">{item.price}</span>
                                                </div>
                                            </div>
                                        </li>
                                    }.bind(this))
                                }
                            </ul>
                        </div>
                        <div className="car-guess clearfix">
                            <h4>猜你喜欢</h4>
                            <ul className="car-list">
                                <li>
                                    <Link to={{pathname:"detail/:id"+'name',query:{name:'粉色满天星'}}}>
                                        <img src="src/static/imgs/guess1.jpeg" alt=""/>
                                        <div className="car-flower">粉色满天星</div>
                                        <div className="car-flowerPrice">249.00</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={{pathname:"detail/:id"+'name',query:{name:'爱微笑的眼睛'}}}>
                                        <img src="src/static/imgs/guess2.jpeg" alt=""/>
                                        <div className="car-flower">爱微笑的眼睛</div>
                                        <div className="car-flowerPrice">249.00</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={{pathname:"detail/:id"+'name',query:{name:'夏之物语/香槟玫瑰50枝'}}}>
                                        <img src="src/static/imgs/guess3.jpeg" alt=""/>
                                        <div className="car-flower">夏之物语/香槟玫瑰50枝</div>
                                        <div className="car-flowerPrice">366.00</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={{pathname:"detail/:id"+'name',query:{name:'芳心如愿/香槟玫19枝'}}}>
                                        <img src="src/static/imgs/guess4.png" alt=""/>
                                        <div className="car-flower">芳心如愿/香槟玫19枝</div>
                                        <div className="car-flowerPrice">217.00</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="car-parent">
                    <div className="car-footer">
                    <div className="car-totalprice">合计：
                    <span className="car-total">{this.state.totalprice}</span>元</div>
                    <div className="car-balance"  onClick={this.goPay.bind(this)}>去结算(<span className="car-totalqty">
                    {this.state.totalqty}</span>)</div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    state: state.car.loading,
    cardata:state.car.cardata,
    lastFetched:state.car.lastFetched,
})

export default connect(mapStateToProps,CarAction)(CarComponent)





