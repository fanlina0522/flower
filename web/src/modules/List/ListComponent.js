import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as ListActions from './ListAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import BottomNavComponent from '../home/bottomNav/BottomNavComponent'
import TopComponent from '../home/TopComponent/TopComponent'
import './List.scss'


var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

let arr=['价格','用途','花材','数量','颜色','类型'];
let priceArr=['199元以内','200-299元','300-399元','400-499元','500-699元','700元以上'];
let purposeArr=['爱情鲜花','生日鲜花','友情鲜花','周年纪念','问候长辈','回报老师','探病慰问','祝贺鲜花','道歉鲜花','包月鲜花'];
let materArr=['玫瑰','百合','康乃馨 ','向日葵','满天星','绣球','桔梗','玫瑰+百合','玫瑰+康乃馨','百合+康乃馨','其它'];
let sprayArr=['9枝','10枝','11枝','12枝','15枝','18枝','19枝','21枝','21枝','29枝','33枝','50枝','66枝','99枝上'];
let colorArr=['红色','白色','粉色','香槟色','紫色','黄色','彩色'];
let typeArr=['单品花束','精品礼盒','手提花篮','手捧花','瓶插鲜花','高端混搭花束']

class ListComponent extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            active: 0
        };
    }
	onsee(event){
		// onClick={this.onsee.bind(this)}
		let rangeData = {range:event.target.innerHTML}
		this.props.seePrice(rangeData);
	}

	getID(event){
		return event.target.innerHTML;
	}
	componentWillReceiveProps(){
		// console.log(this.props.data);
	}

	// 左侧tab 高亮切换
	activeClass(idx){
		return idx===this.state.active ? 'active' : '';
	}
	scroll(event){
		let top = event.target.scrollTop;
		if(top < 120){
			this.setState({ active: 0 })
		}
		else if (top >= 120 && top <758) {
			this.setState({ active: 1 })
		}
		else if (top >=758 && top <940) {
			this.setState({ active: 2})
		}
		else if (top>=940 && top <980) {
			this.setState({ active: 3 })
		}else if (top>=980 && top <1000) {
			this.setState({ active: 4 })
		}else if (top>=1000) {
			this.setState({ active: 5 })
		}
	}
	setActive(idx){
		if (idx==0) {
			this.refs.types.scrollTop=0;
		}else if(idx==1){
			this.refs.types.scrollTop=120;
		}else if(idx==2){
			this.refs.types.scrollTop=758;
		}else if(idx==3){
			this.refs.types.scrollTop=940;
		}else if(idx==4){
			this.refs.types.scrollTop=980;
		}else if(idx==5){
			this.refs.types.scrollTop=1000;
		}
	}
	render(){

		return(
			<div className="List">
				<TopComponent/>				
				<div className="ListMain">
					<div className="typeslist"> 
						{
							arr.map(function(ele,idx){
								return <a className={this.activeClass(idx)} 
								onClick={this.setActive.bind(this,idx) } 
								data-index={idx}  >{ele}</a>
							}.bind(this))
						}						
					</div>
					<div className="types" ref="types" onScroll={this.scroll.bind(this)}>
						<div id="content0" >
							<h3>价格</h3>
							<ul> {
									priceArr.map(function(ele,idx){
										return <li><Link to={{pathname:"goods/:id"+idx,query:{class_price:ele}}} >
										{ele}</Link></li>
									}.bind(this))
								}	
							</ul>
						</div>
						<div id="content1" >
							<h3>用途</h3>
							<ul>
								<li><Link to={{pathname:"goods/:id"+'use',query:{class_use:'爱情鲜花'}}}>
									<img src="src/static/imgs/listimg/aiqing.png"/>
									<p>爱情鲜花</p>
								</Link></li>
								<li><Link to={{pathname:"goods/:id"+'use',query:{class_use:'生日鲜花'}}}>
									<img src="src/static/imgs/listimg/birthday.png"/>
									<p>生日鲜花</p>
								</Link></li>
								<li><Link to={{pathname:"goods/:id"+'use',query:{class_use:'友情鲜花'}}}>
									<img src="src/static/imgs/listimg/youqing.png"/>
									<p>友情鲜花</p>
								</Link></li>
								<li><Link to={{pathname:"goods/:id"+'use',query:{class_use:'周年纪念'}}}>
									<img src="src/static/imgs/listimg/jinian.png"/>
									<p>周年纪念</p>
								</Link></li>
								<li><Link to={{pathname:"goods/:id"+'use',query:{class_use:'问候长辈'}}}>
									<img src="src/static/imgs/listimg/zhangbei.png"/>
									<p>问候长辈</p>
								</Link></li>
								<li><Link to={{pathname:"goods/:id"+'use',query:{class_use:'回报老师'}}}>
									<img src="src/static/imgs/listimg/repayteacher.png"/>
									<p>回报老师</p>
								</Link></li>
								<li><Link to={{pathname:"goods/:id"+'use',query:{class_use:'探病慰问'}}}>
									<img src="src/static/imgs/listimg/chuanqinghuashu.png"/>
									<p>探病慰问</p>
								</Link></li>
								<li><Link to={{pathname:"goods/:id"+'use',query:{class_use:'祝贺鲜花'}}}>
									<img src="src/static/imgs/listimg/wishes.png"/>
									<p>祝贺鲜花</p>
								</Link></li>
								<li><Link to={{pathname:"goods/:id"+'use',query:{class_use:'道歉鲜花'}}}>
									<img src="src/static/imgs/listimg/daoqian.png"/>
									<p>道歉鲜花</p>
								</Link></li>
								<li><Link to={{pathname:"goods/:id"+'use',query:{class_use:'包月鲜花'}}}>
									<img src="src/static/imgs/listimg/jinian.png"/>
									<p>包月鲜花</p>
								</Link></li>
							</ul>
						</div>
						<div id="content2" >
							<h3>花材</h3>
							<ul>
								<li><Link to={{pathname:"goods/:id"+'flower',query:{class_flower:'玫瑰'}}}>玫瑰</Link></li>
								<li><Link to={{pathname:"goods/:id"+'flower',query:{class_flower:'百合'}}}>百合</Link></li>
								<li><Link to={{pathname:"goods/:id"+'flower',query:{class_flower:'康乃馨'}}}>康乃馨</Link></li>
								<li><Link to={{pathname:"goods/:id"+'flower',query:{class_flower:'向日葵'}}}>向日葵</Link></li>
								<li><Link to={{pathname:"goods/:id"+'flower',query:{class_flower:'满天星'}}}>满天星</Link></li>
								<li><Link to={{pathname:"goods/:id"+'flower',query:{class_flower:'绣球'}}}>绣球</Link></li>
								<li><Link to={{pathname:"goods/:id"+'flower',query:{class_flower:'桔梗'}}}>桔梗</Link></li>
								<li><Link to={{pathname:"goods/:id"+'flower',query:{class_flower:'玫瑰+百合'}}}>玫瑰+百合</Link></li>
								<li><Link to={{pathname:"goods/:id"+'flower',query:{class_flower:'玫瑰+康乃馨'}}}>玫瑰+康乃馨</Link></li>
								<li><Link to={{pathname:"goods/:id"+'flower',query:{class_flower:'百合+康乃馨'}}}>百合+康乃馨</Link></li>
								<li><Link to={{pathname:"goods/:id"+'flower',query:{class_flower:'其它'}}}>其它</Link></li>
							</ul>
						</div>
						<div id="content3" >
                    		<h3 className="category-title">数量</h3>
                            <ul class="">
                                <li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'9枝'}}}>9枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'10枝'}}}>10枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'11枝'}}}>11枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'12枝'}}}>12枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'15枝'}}}>15枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'18枝'}}}>18枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'19枝'}}}>19枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'21枝'}}}>21枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'29枝'}}}>29枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'33枝'}}}>33枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'50枝'}}}>50枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'66枝'}}}>66枝</Link>
                                </li><li>
                                    <Link to={{pathname:"goods/:id"+'num',query:{class_num:'99枝以上'}}}>99枝以上</Link>
                                </li>
                            </ul>
                		</div>
                		<div id="content4">
							<h3>颜色</h3>
							<ul>
								<li><Link to={{pathname:"goods/:id"+'color',query:{class_color:'红色'}}}>
								<em style={{background:'#f00'}}>
								</em>红色</Link>
								</li>
								<li><Link to={{pathname:"goods/:id"+'color',query:{class_color:'白色'}}}>
								<em style={{background:'#fff'},{border:"1px solid #ccc"}}>
								</em>白色</Link></li>
								<li><Link to={{pathname:"goods/:id"+'color',query:{class_color:'粉色'}}}>
								<em style={{background:"#fe94ba"}}>
								</em>粉色</Link></li>
								<li><Link to={{pathname:"goods/:id"+'color',query:{class_color:'香槟色'}}}>
								<em style={{background:"#ffe3c3"}}>
								</em>香槟色</Link></li>
								<li><Link to={{pathname:"goods/:id"+'color',query:{class_color:'紫色'}}}>
								<em style={{background:"#b007ff"}}>
								</em>紫色</Link></li>
								<li><Link to={{pathname:"goods/:id"+'color',query:{class_color:'黄色'}}}>
								<em style={{background:"#f4f"}}>
								</em>黄色</Link></li>
								<li><Link to={{pathname:"goods/:id"+'color',query:{class_color:'彩色'}}}>
								<em style={{background: "-webkit-linear-gradient(left top, red , blue)"}}>
								</em>彩色</Link></li>
							</ul>
						</div>
						<div id="content5">
							<h3>类型</h3>
							<ul>
								<li><Link to={{pathname:"goods/:id"+'type',query:{class_type:'单品花束'}}}>单品花束</Link></li>
								<li><Link to={{pathname:"goods/:id"+'type',query:{class_type:'高端混搭花束'}}}>高端混搭花束</Link></li>
								<li><Link to={{pathname:"goods/:id"+'type',query:{class_type:'精品礼盒'}}}>精品礼盒</Link></li>
								<li><Link to={{pathname:"goods/:id"+'type',query:{class_type:'手提花篮'}}}>手提花篮</Link></li>
								<li><Link to={{pathname:"goods/:id"+'type',query:{class_type:'手捧花'}}}>手捧花</Link></li>
								<li><Link to={{pathname:"goods/:id"+'type',query:{class_type:'瓶插鲜花'}}}>瓶插鲜花</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<BottomNavComponent props={this.props}/>				
				 <SpinnerComponent show={this.props.loading}/>
			</div>
		)
	}
} 

const mapStateToprops = state =>({
	loading: state.login.loading,
});

export default connect(mapStateToprops,ListActions)(ListComponent);


