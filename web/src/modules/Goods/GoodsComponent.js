import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as goodsActions from './GoodsAction'
import './Goods.scss'
import '../../static/font/iconfont.css'
import FilterComponent from '../FilterComponent/FilterComponent'
import SpinnerComponent from '../spinner/SpinnerComponent'
import TitleTopComponent from '../TitleTopComponent/TitleTopComponent'

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

var goodsarr=[];
var data=[{id:1,imgs:['1.png'],name:'天长地久/33朵玫瑰 ',range:'200-299元',price:'289.00'},
{id:2,imgs:['2.png'],name:'幸福之爱 /33枝精品玫瑰 ',range:'200-299元',price:'289.00'},
{id:3,imgs:['3.png'],name:'爱与诚/99朵香槟玫瑰 ',range:'500-699元',price:'520.00'},
{id:4,imgs:['4.png'],name:'只是爱着你/33枝极品香槟玫瑰 ',range:'200-299元',price:'255.00'}];

class LoginComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            gobottom:'none',
            asideIdx:0,
            saleColor:'#f4f4f4',
            priceColor:'#f4f4f4',
            takeicon:'',
            saleiconIdx:1,
            priceiconIdx:1,
            getmore:0,
            takemore:0,
        }
    }
    getGoods(rangeData){
        this.props.seePrice(rangeData);          
    }
    componentWillMount(){ 
        let morenNum = {num:this.state.getmore}; 
        // console.log(this.props.location.query)     
        this.props.seePrice(Object.assign({},this.props.location.query,morenNum));
    }
    // 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用    
    componentWillReceiveProps(){ 
        // console.log(this.props)     
             
        // if (this.props.lastFetched) {
        //     // if(this.state.priceiconIdx%2==0){
        //     //     // console.log(this.state.priceiconIdx)
        //     //     let arr = this.props.goodsdata
        //     //     for(var i=0 ; i<arr.length ; i++){
        //     //         for(var j=0 ; j<arr.length ; j++){
        //     //             if (arr[i].price>arr[j].price) {
        //     //                 var temp = arr[i];
        //     //                 arr[i]=arr[j];
        //     //                 arr[j]=temp;
        //     //             }
        //     //         }
        //     //     }
        //     //     this.props.setgoodsdata(arr);
        //     //     // this.props.goodsdata = arr;
        //     //     // this.setState({produtArr:arr});
        //     // }else{
        //     //     let arr = this.props.goodsdata
        //     //     for(var i=0 ; i<arr.length ; i++){
        //     //         for(var j=0 ; j<arr.length ; j++){
        //     //             if (arr[i].price<arr[j].price) {
        //     //                 var temp = arr[i];
        //     //                 arr[i]=arr[j];
        //     //                 arr[j]=temp;
        //     //             }
        //     //         }
        //     //     }
        //     //     this.props.setgoodsdata(arr);
        //         // this.props.goodsdata = arr;
        //         // this.setState({produtArr:arr});
        //     }
        // }
    } 
    // 在组件接收到新的props或者state但还没有render时被调用 
    componentWillUpdate(){
                  
    }
    // 移除DOM节点
    componentWillUnmount(){
        // console.log()
    }
    // 组件更新完
    componentDidUpdate(){     
    }
    // 点击加载更多
    getmoreProdut(){
        // 设置查找位置
        this.setState({getmore:this.state.getmore+4});
        // console.log(this.state.getmore)
        let morenNum = {num:this.state.getmore+4}; 
        let query =  this.props.location.query;    
        if (this.state.saleColor=='#fff') {//销量状态勾选                                    
            if(this.state.saleiconIdx%2!==1){               
                // 销量低到高排序
                let purpose = {get:"saleup"}
                // 发起请求
                this.props.getUpDown(Object.assign({},query,purpose,morenNum));
            }else if(this.state.saleiconIdx%2==1){
                let purpose = {get:"saledown"}
                this.props.getUpDown(Object.assign({},query,purpose,morenNum));
            }
        }else if (this.state.priceColor=='#fff') {//价格状态勾选             
            if(this.state.priceiconIdx%2!==1){
                // 价格高到低排序
                let purpose = {get:"priceup"}
                // 发起请求
                this.props.getUpDown(Object.assign({},query,purpose,morenNum));
            }else if(this.state.priceiconIdx%2==1){
                let purpose = {get:"pricedown"}
                this.props.getUpDown(Object.assign({},query,purpose,morenNum));
            }
        }else{//默认状态
             this.props.seePrice(Object.assign({},query,morenNum));
        }        
    }
    // 点击改变asdeIdx 值
    setTakeClass(idx){        
        // 切换高亮
        this.setState({asideIdx:idx});
        let morenNum = {num:this.state.getmore};
        let IDX = this.state.saleiconIdx;
        let query = this.props.location.query;
        if (idx == 0) {
            // 发起默认请求
            this.props.seePrice(query);
        }
        if (idx===1) {         
            // 销量排序箭头转动小动画                    
            if(this.state.saleColor=='#fff'&&this.state.saleiconIdx%2!==1){
                this.setState({takeicon:'takeicon'});
                // 销量低到高排序
                let purpose = {get:"saleup"}
                // 发起请求
                this.props.getUpDown(Object.assign({},query,purpose));
            }else if(this.state.saleiconIdx%2==1){
                this.setState({takeicon:''});
                let purpose = {get:"saledown"}
                this.props.getUpDown(Object.assign({},query,purpose));
            }
            else{
                this.setState({takeicon:''});
            }
            this.state.saleiconIdx++;
            this.setState({saleColor:'#fff',priceColor:'#f4f4f4',saleiconIdx:`${this.state.saleiconIdx}`,priceiconIdx:1});
        }else if(idx===2){
            // 价格排序箭头转动小动画
            if(this.state.priceColor=='#fff'&&this.state.priceiconIdx%2!==1){
                this.setState({takeicon:'takeicon'});
                // 价格高到低排序
                let purpose = {get:"priceup"}
                // 发起请求
                this.props.getUpDown(Object.assign({},query,purpose));
            }else if(this.state.priceiconIdx%2==1){
                this.setState({takeicon:''});
                let purpose = {get:"pricedown"}
                this.props.getUpDown(Object.assign({},query,purpose));
            }else{
                this.setState({takeicon:''});
            }               
            this.state.priceiconIdx++;
            this.setState({priceColor:'#fff',saleColor:'#f4f4f4',priceiconIdx:`${this.state.priceiconIdx}`,saleiconIdx:1});     
        }
        else{
            this.setState({saleColor:'#f4f4f4',priceColor:'#f4f4f4',priceiconIdx:1,saleiconIdx:1});
        }
    }
    // 子组件回设默认高亮
    takemoren(){
         this.setState({asideIdx:0,saleColor:'#f4f4f4',priceColor:'#f4f4f4',saleiconIdx:1,priceiconIdx:1});
    }
    takeClass(idx){
        return idx == this.state.asideIdx ? 'onactive' : ''
    }
    render(){
        // console.log(this.state.saleiconIdx,this.state.priceiconIdx)
        return(
            <div className="goods">         
               <div className="top">
                    <TitleTopComponent title={'商品列表'}/>
                    <div className="toptitle">
                        <div className="goods_spray">当前分类 ： <span className="goods_title"> 鲜花</span></div>
                        <p style={{display:'none'}}>已选择：{
                            goodsarr.map(function(item){
                                return <span className="close">{item} x</span>
                            })
                        }</p>
                    </div>
                    <div className="asidetitle">
                        <section>
                            <Link className={this.takeClass(0)} onClick={this.setTakeClass.bind(this,0)} >默认</Link>
                            <Link className={this.takeClass(1)} 
                                onClick={this.setTakeClass.bind(this,1)}>销量
                                <i style={{color:`${this.state.saleColor}`}} className={`iconfont icon-jiantou-b ${this.state.takeicon}`}></i>
                            </Link>
                            <Link className={this.takeClass(2)} 
                                onClick={this.setTakeClass.bind(this,2)}>价格
                                <i style={{color:`${this.state.priceColor}`}} className={`iconfont icon-jiantou-b ${this.state.takeicon}`}></i>
                            </Link>
                            <Link href="javascript:;" onClick={this.props.getfiflter}className="goodslist">筛选</Link>
                        </section>
                    </div>
               </div>
               <div className="goodsmain">
                    <div className="content">
                        <ul className="clearfix">
                            {   
                                this.props.goodsdata.map(function(item){ 
                                    return <li data-id={item.bid}><Link to={{pathname:"detail/:id"+'name',query:{name:item.name}}}>
                                    <div style={{'background-image':`url(src/static/imgs/${item.big_img})`}}></div>
                                    <p className="name">{item.name}</p>
                                    <p className="price">￥{item.price}.00</p>
                                    </Link></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="gooda_tip" onClick={this.getmoreProdut.bind(this)} ><Link>点击加载更多数据</Link></div>
               </div>
               <FilterComponent show={this.props.filter} props={this.props} takemoren={this.takemoren.bind(this)}/> 
               <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         loading: state.goods.loading,
//         data: state.goods.data,
//         lastFetched: state.goods.lastFetched,
//     }
// }


const mapStateToProps = state => ({
    loading: state.goods.loading,
    goodsdata: state.goods.goodsdata,
    lastFetched: state.goods.lastFetched,
    filter:state.goods.filter
})
export default connect(mapStateToProps, goodsActions)(LoginComponent)