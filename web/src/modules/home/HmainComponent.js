import React, {Component} from 'react'
import {connect} from 'react-redux';
import Slider from './banner/Slider/Slider'
import HotNavComponent from '../home/HotNavComponent';
import BlastComponent from './BlastComponent'
import SendTipsComponent from './SendTipsComponent'
import CommentComponent from './CommentComponent'
import BottComponent from './BottComponent'
import './home.scss'
const IMAGE_DATA = [
  {
    src: require('../../static/imgs/ibanner2.jpeg'),
  },
  {
    src: require('../../static/imgs/ibanner1.jpeg'),
  },
  {
    src: require('../../static/imgs/ibanner3.jpeg'),
  },
];

class HmainComponent extends React.Component{
  constructor(props){
        super(props);
        this.state = {
            top: 'none',
        };
    }
  // 返回顶部函数
  backtop(e){

      // 缓动运动
      let timer = setInterval(()=>{
        // 先获取滚动过的距离
        let mainBox = this.refs.bodyBox
        let scrollTop = mainBox.scrollTop;//2000

        // 关键：利用滚动过的距离计算速度
        let speed = Math.ceil(scrollTop/5);

        // 设置滚动条滚动距离
        let _scrollTop = scrollTop - speed;

        if(_scrollTop <= 20){
          clearInterval(timer);
          _scrollTop = 0;
        }

        mainBox.scrollTop=(0,_scrollTop);

      },30);
  }
  goscrollTop(event){
    if (event.target.scrollTop <= 300) {
      this.setState({top:'none'});
    }else{
      this.setState({top:'block'});
    }
  }
	render(){
		return(
			<div className="main"  onScroll={this.goscrollTop.bind(this)}  ref="bodyBox" >
				    <Slider
       				items={IMAGE_DATA}
       				speed={1.2}
       				delay={2.1}
        			pause={true}
        			autoplay={true}
        			dots={true}
        			arrows={false}
      			/>
      			<HotNavComponent/>
      			<BlastComponent/>
            <SendTipsComponent/>
            <BottComponent/>
            <div className='topBtn' style={{display:`${this.state.top}`}} onClick={this.backtop.bind(this)}>
              <i className="iconfont icon-jiantou-b"></i>
            </div>
			</div>
		)
	}
}
export default HmainComponent;