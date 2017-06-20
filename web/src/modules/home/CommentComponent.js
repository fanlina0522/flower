import React, {Component} from 'react'
import {connect} from 'react-redux'
class CommentComponent extends React.Component{
	render(){
		return(
			<div className='comment'>
				<div className='box-hd'>
					<span>
						<i className="iconfont icon-fenlei"></i>
						<i>评论列表</i>
					</span>
					<span>更多+</span>
				</div>
				<div className='shade'></div>
			</div>
		)
	}
}
export default CommentComponent;