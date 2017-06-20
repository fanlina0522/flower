
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as indexActions from './IndexAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './Index.scss'

class IndexComponent extends React.Component {
    constructor(props){
        super(props)
    }

    //页面加载完闭
    componentDidMount(){
     this.props.seek('all','not').then(response => {
        console.log(JSON.parse(response.body))
          this.append(JSON.parse(response.body))
     })
    }
    //生成index页面
   append(data) {
    //结果集循环
    for (var i = 0; i <data.length; i++) {
        //生成tr标签

        var tr = document.createElement('tr');
        //生成内容
        tr.innerHTML=(` 
            <td><input type="checkbox"></td>
            <td>${data[i].bid}</td>
            <td>${data[i].name}</td>
            <td>${data[i].price}</td>
            <td>${data[i].hot}</td>
            <td>${data[i].class_type}</td>
            <td style="text-align:center;">${data[i].class_color}</td>
            <td>
                <a href="javascript:;" class="yulan_btn tianjia">添加</a>
                <a href="javascript:;" class="yulan_btn bianji">编辑</a>
                <a href="javascript:;" class="yulan_btn d_delete">删除</a>
            </td>
        `);
        //插入tbody
      this.refs.tbody.appendChild(tr);
  }
}
//添加数据
addHandler(){
      this.refs.page_container.style.display="block"
      this.refs.layui_body.style.display="none"
}

datum (){


}

// 搜索
searchHandler(){
    
    this.refs.show_input.style.display="inline-block"
}

    render(){
        return(
    <div>
        <div className="layui-header">
            <div className="layui-main">
                <div className="admin-login-box">
                    <a className="logo" href="#">
                        <span>后台管理系统</span>
                    </a>
                    <div className="admin-side-toggle">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </div>

                <ul className="layui-nav admin-header-item">
            <li className="layui-nav-item">
                <a href="javascript:;">首页</a>
            </li>
            <li className="layui-nav-item">
                <a href="javascript:;">商品列表</a>
            </li>
            <li className="layui-nav-item">
                <a href="javascript:;">视频</a>
            </li>
            <li className="layui-nav-item">
                      <img src="src/static/imgs/too.jpg"/>
                      <span>beginner</span>
                    <span className="layui-nav-more"></span>
                    <dl className="layui-nav-child">
                        <dd>
                            <a href="javascript:;"><i className="fa fa-user-circle" aria-hidden="true"></i> 个人信息</a>
                        </dd>
                        <dd>
                            <a href="javascript:;"><i className="fa fa-gear" aria-hidden="true"></i> 设置</a>
                        </dd>
                        <dd id="lock">
                            <a href="javascript:;">
                                <i className="fa fa-lock" aria-hidden="true"></i> 锁屏 (Alt+L)
                            </a>
                        </dd>
                        <dd>
                            <a href="login.html"><i className="fa fa-sign-out" aria-hidden="true"></i> 注销</a>
                        </dd>
                    </dl>
                </li>
         </ul> 
            </div>
        </div>


        <div className="jt-main" >
            <div className="jt-side-scroll">
                <ul className="jt-nav-tree">
                    <li className="jt-nav-item">
                        <a href="javascript:;">
                        <i className="fa fa-cubes" aria-hidden="true" data-icon="fa-cubes"></i>
                        <cite>商品</cite>
                        <span className="jt-nav-more"></span>
                        </a>
                        <dl className="jt-nav-child ">
                            <dd className="sp_cite">
                            <a href="javascript:;" data-url="form.html">
                             <i className="fa fa-bars" aria-hidden="true"></i>
                              <cite>商品列表</cite></a>
                            </dd>
                        </dl>
                    </li>

                </ul>
            </div>
        </div>


        <div ref="layui_body" className="layui-body" id="admin-body">
                <div className="layui-tab-brief">
                    <ul className="layui-tab-title">
                        <li className="layui-this">
                          <i className="fa fa-bars" aria-hidden="true"></i>
                        <span>表格</span>
                        <i className="layui-tab-close" data-id="4">&times;</i></li>
                    </ul>
                </div>
              <div className="admin-main">
                   <blockquote className="layui-elem-quote">
                        <a href="javascript:;" className="layui-btn layui-btn-small" onClick={this.addHandler.bind(this)}  ref="add" id="add">
                            <i className="fa fa-plus-square"></i> 添加信息
                        </a>
                        <a href="javascript:;" className="layui-btn layui-btn-small" id="import">
                            <i className="fa fa-circle-o-notch"></i> 导入信息
                        </a>
                        <a href="javascript:;" className="layui-btn layui-btn-small">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i> 导出信息
                        </a>
                        <a href="javascript:;" className="layui-btn layui-btn-small shousuo" ref="search"  onClick={this.searchHandler.bind(this)} id="search">
                            <input type="text" className="show_input" ref="show_input"/>
                            <i className="fa fa-search-plus"></i><span ref="span">编号搜索</span>
                        </a>
                    </blockquote>

                    <fieldset className="layui-elem-field">
                        <legend>数据列表</legend>
                        <div className="layui-field-box">
                            <table className="site-table table-hover">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" id="selected-all"/></th>
                                        <th>编号</th>
                                        <th>商品名称 </th>
                                        <th>商品价格</th>
                                        <th>销量</th>
                                        <th>类型</th>
                                        <th>颜色</th>
                                        <th style={{width:"16%"}}>操作</th>
                                    </tr>
                                </thead>
                               <tbody ref="tbody">



                               </tbody>
                            </table>
                        </div>
                    </fieldset>
                </div>
        </div>

<div ref="page_container" className="page-container">
    <form className="form form-horizontal" id="form-article-add">

        <div className="row clearfix">
            <label className="form-label">商品编号 :</label>
            <div className="formControls">
                <input ref="bid" type="text" className="input-text goods-id"/ >
                <p className="formControls_p">*为避免商品重复,编号无法修改</p>
            </div>
        </div>
        <div className="row clearfix">
            <label className="form-label">商品名称 :</label>
            <div className="formControls">
                <input ref="name" type="text" className="input-text goods-name" />
            </div>
        </div>
        <div className="row clearfix">
            <label className="form-label">商品详情 :</label>
            <div className="formControls">
                <input ref="details"  type="text" className="input-text goods-details" />
            </div>
        </div>
        
        <div className="row clearfix">
            <label className="form-label">商品价格 :</label>
            <div className="formControls">
                <input ref="price" type="text" className="input-text goods-price" />
            </div>
        </div>
        
        <div className="row clearfix">
            <label className="form-label">材料 :</label>
            <div className="formControls">
                <input ref="material" type="text" className="input-text goods-material" />
            </div>
        </div>
        

        <div className="row clearfix">
            <label className="form-label">包装 :</label>
            <div className="formControls">
                <input ref="packing"  type="text" className="input-text goods-packing" />
            </div>
        </div>

        <div className="row clearfix">
            <label className="form-label">花语 :</label>
            <div className="formControls">
                <input ref="flower" type="text" className="input-text goods-flower" />
            </div>
        </div>

        <div className="row clearfix">
            <label className="form-label">附送 :</label>
            <div className="formControls">
                <input ref="provide" type="text" className="input-text goods-provide" />
            </div>
        </div>
        

        <div className="row clearfix">
            <label className="form-label">配送 :</label>
            <div className="formControls">
                <input ref="Distribution" type="text" className="input-text goods-Distribution" />
            </div>
        </div>

         <div className="row clearfix">
            <label className="form-label">销量 :</label>
            <div className="formControls">
                <input ref="hot" type="text" className="input-text goods-hot"/>
            </div>
        </div>

        <div className="row clearfix">
            <label className="form-label">分类 :</label>
            <div className="formControls feilei">
                <p>按用途</p>
                <div className="yongtu">
                    <input type="checkbox" value="爱情鲜花"/>爱情鲜花
                    <input type="checkbox" value="生日鲜花"/>生日鲜花
                    <input type="checkbox" value="友情鲜花"/>友情鲜花
                    <input type="checkbox" value="周年鲜花"/>周年鲜花
                    <input type="checkbox" value="问候长辈"/>问候长辈
                    <input type="checkbox" value="回报老师"/>回报老师
                    <input type="checkbox" value="探病慰问"/>探病慰问
                    <input type="checkbox" value="祝贺鲜花"/>祝贺鲜花
                    <input type="checkbox" value="道歉鲜花"/>道歉鲜花
                    <input type="checkbox" value="包月鲜花"/>包月鲜花
                </div>
                <p>按对象</p>
                <div className="duixiang">
                    <input type="checkbox" value="送朋友"/>送朋友
                    <input type="checkbox" value="送父母"/>送父母
                    <input type="checkbox" value="送长辈"/>送长辈
                    <input type="checkbox" value="送领导"/>送领导
                    <input type="checkbox" value="送客户"/>送客户
                    <input type="checkbox" value="送老师"/>送老师
                    <input type="checkbox" value="送病人"/>送病人
                    <input type="checkbox" value="送闺蜜"/>送闺蜜
                </div>
                <p>按花材</p>
                <div className="huacai">
                    <input type="checkbox" value="玫瑰"/>玫瑰
                    <input type="checkbox" value="百合"/>百合
                    <input type="checkbox" value="康乃馨"/>康乃馨
                    <input type="checkbox" value="向日葵"/>向日葵
                    <input type="checkbox" value="满天星"/>满天星
                    <input type="checkbox" value="绣球"/>绣球
                    <input type="checkbox" value="桔梗"/>桔梗
                    <input type="checkbox" value="玫瑰+百合"/>玫瑰+百合
                    <input type="checkbox" value="玫瑰+康乃馨"/>玫瑰+康乃馨
                </div>
                <p>按数量</p>
                <div className="num">
                    <input type="checkbox" value="9枝"/>&nbsp;&nbsp;9枝
                    <input type="checkbox" value="10枝"/>10枝
                    <input type="checkbox" value="11枝"/>11枝
                    <input type="checkbox" value="12枝"/>12枝
                    <input type="checkbox" value="15枝"/>15枝
                    <input type="checkbox" value="14枝"/>14枝
                    <input type="checkbox" value="15枝"/>15枝
                    <input type="checkbox" value="18枝"/>18枝
                    <input type="checkbox" value="19枝"/>19枝
                    <input type="checkbox" value="21枝"/>21枝
                    <input type="checkbox" value="29枝"/>29枝
                    <input type="checkbox" value="33枝"/>33枝
                    <input type="checkbox" value="50枝"/>50枝
                    <input type="checkbox" value="66枝"/>66枝
                    <input type="checkbox" value="99枝以上"/>99枝以上
                </div>
            
            <p>按颜色</p>
                <div className="yangse">
                    <input type="checkbox" value="红色"/>红色
                    <input type="checkbox" value="白色"/>白色
                    <input type="checkbox" value="粉色"/>粉色
                    <input type="checkbox" value="蓝色"/>蓝色
                    <input type="checkbox" value="香槟色"/>香槟色
                    <input type="checkbox" value="紫色"/>紫色
                    <input type="checkbox" value="黄色"/>黄色
                    <input type="checkbox" value="彩色"/>彩色
                </div>
        
            <p>按类型</p>
                <div className="leixin">
                    <input type="checkbox" value="单品花束"/>单品花束
                    <input type="checkbox" value="高端混搭花束"/>高端混搭花束
                    <input type="checkbox" value="精品礼盒"/>精品礼盒
                    <input type="checkbox" value="手提花篮"/>手提花篮
                    <input type="checkbox" value="手捧花"/>手捧花
                    <input type="checkbox" value="瓶插鲜花"/>瓶插鲜花
                </div>
                <p>按价格</p>
                <div className="jiage">
                    <input type="checkbox" value="199以内"/>199元以内
                    <input type="checkbox" value="200-299元"/>200-299元
                    <input type="checkbox" value="300-399元"/>300-399元
                    <input type="checkbox" value="400-499元"/>400-499元
                    <input type="checkbox" value="500-699元"/>500-699元
                    <input type="checkbox" value="700元以上"/>700元以上
                </div>
            </div>
        </div>
    </form>

    <div className="row clearfix">
          <form action="" className="form_img">
                
          <div className="big_img">
              <span style={{width:"120px"}}>商品图片：</span>
              <input className="shangchuang_img input_01" type="file" data="" name="photos" / >
                <div className="un_img">
                    <img style={{width:"100px",height:"100px"}}  alt="无法找到图片"/>
                </div>
                
          </div>

           <div className="xiao_img">
              <span className="item_name" style={{width:"120px"}}>商品小图：</span>
                <input type="file" name="photos" data="" className="input_02" /><br/>
                 <input type="file" name="photos" data="" className="input_03"/>
                    <div className="un_img">
                        <img style={{width:"100px",height:"100px"}}  alt="无法找到图片" />
                        <img style={{width:"100px",height:"100px"}}  alt="无法找到图片" />
                    </div>
           </div> 

          <div className="details_img">
              <span className="item_name" style={{width:"120px"}}>详情图片：</span>
                <input type="file" name="photos" data="" className="input_04"/><br/>
                 <input type="file" name="photos" data="" className="input_05"/>
                    <div className="un_img">
                        <img style={{width:"100px",height:"100px"}} src="" alt="无法找到图片" />
                        <img style={{width:"100px",height:"100px"}} src="" alt="无法找到图片" />
                    </div>
           </div> 
        </form>
    </div>
    <button type="button" className="btn-primary">保存</button>
    <button type="button" className="btn-update" style={{display:"none"}}>更新</button>
    <button type="button" className="btn-success">退出</button>
 </div>
            <SpinnerComponent show={this.props.loading}/>
         </div>
        )
    }
}

const mapStateToProps = state => ({
     loading: state.index.loading,
     data:state.index.data
})
export default connect(mapStateToProps, indexActions)(IndexComponent)
