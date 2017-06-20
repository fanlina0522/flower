import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
import './tipsComponent.scss';
class TipsComponent3 extends React.Component{
	backHandle(){
                window.history.back();
    }
    render(){
    	return(
			<div id='tips'>
				<div className='fhead'>
					<i className="iconfont icon-jiantou-copy" onClick={this.backHandle}></i>
					<span>情人节送花注意事项</span>
				</div>
				<div className='content'>
					<br/><h3>情人节送花注意事项</h2><br/>
					<p>玫瑰花语</p><br/>
					<p>玫瑰花，名赤蔷薇，为蔷薇科落叶灌木。茎多刺。花有紫、白两种，
					形似蔷被和月季。一般用作蜜饯、糕点等食品的配料。
					花瓣、根均作药用，入药多用紫玫瑰。</p><br/>
					<p>玫瑰花是“美神”的化身，是“爱情之花”。 特别是2月14日，
					西方情人节，在爱情之河畅游的年轻人，
					都用此花献给自己的心上人来表达自己的感情。</p><br/>
					<p>现在，无论东方，西方，情人节这一天街上到处是玫瑰花，
					女孩子在这一天是最幸福的。</p><br/>
					<p>其实，不论何时，何地，她收到玫瑰花都会怦然心动的。</p><br/>
					<p>在美、英、保加利亚、罗马尼亚等国，她作为国花。</p><br/>
					<p>在我国，北京、 天津、南昌、衡阳等市把她作为市花 </p><br/>
					<h3>玫瑰花颜色的意义：</h3><br/>
					<p>红玫瑰 代表热情真爱；</p><br/>
					<p>黄玫瑰 代表珍重祝福和嫉妒失恋；</p><br/>
					<p>紫玫瑰 代表浪漫真情和珍贵独特；</p><br/>
					<p>白玫瑰 代表纯洁天真；</p><br/>
					<p>黑玫瑰 则代表温柔真心；</p><br/>
					<p>橘红色 玫瑰友情和青春美丽；</p><br/>
					<p>蓝玫瑰 则代表敦厚善良。</p><br/>
					<br/>
				</div>
			</div>			
    	)
    }
}
export default TipsComponent3;