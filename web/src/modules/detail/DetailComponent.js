import React,{Component} from 'react'

import {connect} from 'react-redux'
import * as DetailAction from './DetailAction'
import './Detail.scss'
import '../../static/font/iconfont.css'
import TitleTopComponent from '../TitleTopComponent/TitleTopComponent'

//轮播图
import BannerComponent from '../banner/banner'

//  { this.props.detailsuccess && <BannerComponent
//     imgList = {this.props.detailBigimg.map(function(item){
//     return {src: 'src/static/imgs/' + item}
// })}
//     duration ="3000"
//     />}


class DetailComponent extends  Component{
    constructor(props){
        super(props)
        this.state = {
            detailPrice : 0,
            gobottom : 'none',
            tab:[
                {tabName:'商品详情',id:1},
                {tabName:'用户评论',id:2},
                {tabName:'鲜花问答',id:3},
            ],
            currentIndex:1
        }
    }

    tabChoiced(id){
        //tab切换到方法
        this.setState({currentIndex:id});
    }
    //判断数量
    qtyMinus(){
        if(this.refs.qty.value<2){
            return;
        }else{
            this.props.minus(this.refs.qty.value);
        }
    }
    componentWillMount(){ 
        this.props.getdetail(this.props.location.query);
    }
    // componentWillUpdate(){
    //     // 在组件接收到新的props或者state但还没有render时被调用
    //     if (this.props.detaildata[0].price) {
    //         this.setState({detailPrice:`${this.props.detaildata[0].price}`})
    //     }
    // }



    //跳转到购物车
    goShopping(){
        let obj = {
            url:this.props.detailBigimg[0],
            name: this.refs.goodsName.innerText,
            price:this.refs.goodsPrice.innerText,
            id:  this.refs.goodsId.innerText,
            qty:  Number(this.refs.qty.value)
        }
        //将参数传递到goshopCar
        this.props.goshopCar(obj);
        let msg = confirm('已成功加入购物车，是否去结算');
        if(msg){
            window.location.href = '#/car';
        }else{
            return
        }
    }
    //跳转到购买页面
    goBuy(){
        window.location.href = '/#newOrder';
    }

    render(){
        console.log(this.props)
        let isBox1Show=this.state.currentIndex==1 ? 'block' : 'none';
        let isbox2Show=this.state.currentIndex==2 ? 'block' : 'none';
        let isbox3Show=this.state.currentIndex==3 ? 'block' : 'none';
        return(
            <div className="detail-container">
                <TitleTopComponent title={'商品详情'}/>   
                <div className="detail-main">
                    <div className="detail-lbt">
                       {
                             this.props.detailsuccess && <BannerComponent
                                imgList = {this.props.detailBigimg.map(function(item){
                                    return {src: 'src/static/imgs/' + item}
                                })}
                                duration ="3000"
                            />
                            // <img src={`src/static/imgs/${this.props.detailBigimg}`}/>
                       }
                    </div>

                    {
                        this.props.detaildata.map(function(item,index){
                            console.log('item',item)
                            return <div className="detail-goodsmsg">
                                        <div className="detail-goodsname" >
                                            <span className="goods_Name" ref="goodsName">{item.name}</span>
                                            <span className="detail-goodsid">编号：<span className="detail_goodsid" ref="goodsId">{item.bid}</span></span>
                                        </div>
                                        <div className="detail-goodsprice">单价：<span className="detail-price" ref="goodsPrice">{item.price}</span></div>
                                    </div>
                        })
                    }
                    <div className="detail-goodsqty">
                        数量：
                        <div className="detail-btn-box">
                            <input className="detail-btn-minus" type="button" onClick={this.qtyMinus.bind(this)} value="-"/>
                            <input  type="number" className="detail-btn-qty" style={{margin:'0'}} ref="qty" value={this.props.data} />
                            <input type="button" className="detail-btn-plus" onClick={this.props.plus} value="+"/>
                        </div>
                    </div>
                    <div className="detail-tab">
                        {
                            this.state.tab.map(function(res,index) {

                                let tabStyle = res.id==this.state.currentIndex ? 'detail_active_color': ' ';
                                return    <div key={index} onClick={this.tabChoiced.bind(this,res.id)} className={tabStyle}>{res.tabName}</div>

                            }.bind(this))
                        }
                    </div>
                    <div className="detail-content">
                        <div className="detail-goodsdetail" style={{"display":isBox1Show}}>
                            {
                                this.props.detaildata.map(function(item,index){
                                    return  <div className="detail-msg">
                                        <div className="detail-item">
                                            <div className="k">材料</div>
                                            <div className="v  details_name">{item.material}</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="k">包装</div>
                                            <div className="v details_baozhuang">粉色双面纸包装</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="k">花语</div>
                                            <div className="v details_huayu">{item.flower}</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="k">附送</div>
                                            <div className="v">{item.provide}</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="k">配送</div>
                                            <div className="v">{item.Distribution}</div>
                                        </div>
                                    </div>
                                })
                            }
                            <div className="detail-guess">
                                <h4>猜你喜欢</h4>
                                <ul className="detail-list">
                                    <li>
                                        <img src="src/static/imgs/guess1.jpeg" alt=""/>
                                        <div className="detail-flower" >粉色满天星</div>
                                        <div className="detail-flowerPrice" >249.00</div>
                                    </li>
                                    <li>
                                        <img src="src/static/imgs/guess2.jpeg" alt=""/>
                                        <div className="detail-flower">爱微笑的眼睛</div>
                                        <div className="detail-flowerPrice">249.00</div>
                                    </li>
                                    <li>
                                        <img src="src/static/imgs/guess3.jpeg" alt=""/>
                                        <div className="detail-flower">夏之物语/香槟玫瑰50枝</div>
                                        <div className="detail-flowerPrice">366.00</div>
                                    </li>
                                    <li>
                                        <img src="src/static/imgs/guess4.png" alt=""/>
                                        <div className="detail-flower">芳心如愿/香槟玫19枝</div>
                                        <div className="detail-flowerPrice">217.00</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="detail-apprise" style={{"display":isbox2Show}}>
                            <ul className="apprise-list" >
                                <li>
                                    <div className="apprise-peoplemsg">林**<span className="apprise-status">好评</span><span className="apprise-time">2017-06-06 11:37:37</span></div>
                                    <div className="apprise-content">
                                       送的很及时，花很漂亮，客服主动给我回的图，很喜欢
                                    </div>
                                </li>
                                <li>
                                    <div className="apprise-peoplemsg">林**<span className="apprise-status">好评</span><span className="apprise-time">2017-06-06 11:37:37</span></div>
                                    <div className="apprise-content">
                                        送的很及时，花很漂亮，客服主动给我回的图，很喜欢
                                    </div>
                                </li>
                                <li>
                                    <div className="apprise-peoplemsg">林**<span className="apprise-status">好评</span><span className="apprise-time">2017-06-06 11:37:37</span></div>
                                    <div className="apprise-content">
                                        送的很及时，花很漂亮，客服主动给我回的图，很喜欢
                                    </div>
                                </li>
                                <li>
                                    <div className="apprise-peoplemsg">林**<span className="apprise-status">好评</span><span className="apprise-time">2017-06-06 11:37:37</span></div>
                                    <div className="apprise-content">
                                        送的很及时，花很漂亮，客服主动给我回的图，很喜欢
                                    </div>
                                </li>
                                <li>
                                    <div className="apprise-peoplemsg">林**<span className="apprise-status">好评</span><span className="apprise-time">2017-06-06 11:37:37</span></div>
                                    <div className="apprise-content">
                                        送的很及时，花很漂亮，客服主动给我回的图，很喜欢
                                    </div>
                                </li>
                                <li>
                                    <div className="apprise-peoplemsg">林**<span className="apprise-status">好评</span><span className="apprise-time">2017-06-06 11:37:37</span></div>
                                    <div className="apprise-content">
                                        送的很及时，花很漂亮，客服主动给我回的图，很喜欢
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="detail-answer" style={{"display":isbox3Show}}>
                            <ul className="detail-flowerasw">
                                <li className="">
                                    <div className="mui-media-body">
                                        <p className="ask">问：你们的鲜花是怎么配送的？</p>
                                        <p>
                                            答：我们是全国联盟店直接配送，目前拥有6000多家联盟配送店，所有鲜花均由所在地的配送店专人专车配送，鲜花都是当天现包现送，以保证我们鲜花的质量，下单后可以加我们客服的微信：139xxxx3434，可以给你回图的
                                        </p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="mui-media-body">
                                        <p className="ask"> 问：收到的鲜化和图片是一模一样的吗？</p>
                                        <p>
                                            答：鲜花的纯手工包扎完成，由于各地插花师对图片上花型的理解会有所不同，每一朵花的开放程度不同在加上各地的气候花材和包装材料也难免会有一些差异，但我们的保证鲜花的主花材、新鲜程度、数量、颜色与说明一致，与图片相似度在90%以上，您可放心订购。
                                        </p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="mui-media-body">
                                        <p className="ask">问：鲜花都是送到收花人手中吗？</p>
                                        <p>
                                            答：一般情况下都是直接送到收花人手中的，特殊情况下如收花人不在，收花人据收，门卫不让进，收花人换地方等其他原因除外。</p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="mui-media-body">

                                        <p className="ask">问：收花人拒收怎么办？</p>
                                        <p>
                                            答: 鲜花已经做好后无法再次使用相应制作配送成本已经产生,因收花人或订花人的原因（非质量原因）导致无法送达或者拒绝签收的，鲜花款项将不能退还，情亲谅解。</p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="mui-media-body">
                                        <p className="ask">问：鲜花需要提前预定吗？</p>
                                        <p>
                                            答：重大节日（情人节，母亲节，女王节）可提前半个月预定，因越早订价格质量都有保障，非重大节日可以提前1-10天预订，因特殊花材好安排，为了保障花的新鲜，所有的提前预定的订单都是当天现包现送的。</p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="mui-media-body">
                                        <p className="ask">问：可以在指定日期和时间送到吗？</p>
                                        <p>
                                            答:可以指定日期送到，非节假日期间的上午或下午时间段送到（节日期间只承诺当天送到）建议至少提前1天订购为好，如果有其他特殊要求，可以和我们客服人员进行沟通，我们一定会尽力为您做到。</p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="mui-media-body">
                                        <p className="ask">问：鲜花的枝数和颜色会有变化吗？</p>
                                        <p>
                                            答:鲜花的季节性较大，因此您在某一季节选择的某种花材可能会无法供应。按照寓意相同、类似花材、价值相同的替代原则替代，对于主要花材及包装材料，我们将在征求您的意见后进行处理，希望您能谅解。</p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="mui-media-body">
                                        <p className="ask">问：收花人不在怎么办？</p>
                                        <p>
                                            答：收花人不在相应的地址，我们会联系收花人指定相应同事代收，如果收花人电话关机无人代收的情况会将鲜花带回，联系订购人确定后在配送，并收取相应配送费用。</p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="mui-media-body">
                                        <p className="ask">问:送花前是否可以不通知收花人？</p>
                                        <p>
                                            答：可以的，但需要提供准确详细的地址，并能确保收花人当天在这个位置，亲可在下单时在“备注栏”里面备注送花前不联系收花人，以给收花人一个惊喜。我们就会联系收花人说送快递或者其他东西，这样也可以避免收花人不在的情况。
                                        </p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="mui-media-body">
                                        <p className="ask">问：订单提交可以取消吗？</p>
                                        <p>
                                            答：当订单状态改变后，就不可以取消订单或者退单，因为鲜花属于一次性消费品，请亲谅解！</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <footer className="detail-footer">
                    <div className="detail-countPrice">合计：<span className="detail-totalPrice">{
                        this.props.data*parseFloat(this.props.detailPrice)
                    }</span>元</div>
                    <div className="detail-incar" onClick={this.goShopping.bind(this)}>加入购物车</div>
                    <div className="detail-buy" onClick={this.goBuy}>立即购买</div>
                </footer>
            </div>
        )
    }
}

// export default DetailComponent

const mapStateToProps = state => ({
    data:state.detail.data,
    detaildata: state.detail.detaildata,
    detailPrice: state.detail.detailPrice,
    detailBigimg: state.detail.detailBigimg || [],
    detailsuccess: state.detail.status
})
export default connect(mapStateToProps,DetailAction)(DetailComponent)