import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
import './tipsComponent.scss'
class TipsComponent1 extends React.Component{
        backHandle(){
                window.history.back();
        }
	render(){
		return(
			<div id="tips">
				<div className='fhead'>
					<i className="iconfont icon-jiantou-copy" onClick={this.backHandle}></i>
					<span>送花卡片如何写？贺卡这么写最感人</span>
				</div>
				<div className='content'>
					<br/>
					<p>送花已经是一种流行趋势，
					然送花都是可以留言，那么送花的留言既要有心意还要有新意。
					则送花卡片写什么好？写什么样的留言能让对方欣喜?</p><br/>
					<h3>经典的送花留言</h3><br/>
					<p> 不要因为也许会改变，就不肯说那句美丽的誓言；
					不要因为也许会分离，就不敢求一次倾心的相遇。（席慕容）</p><br/>
					<p>我给你的一切，你将永恒占有。（泰戈尔）</p><br/>
					<p>让我的爱情，像阳光一样，包围着你，
					而又给你光辉灿烂的自由。（泰戈尔）</p><br/>
					<p>我愿意是树，如果你是树上的花；
					我愿意是花，如果你是露水；
					我愿意是露水，如果你是阳光。（裴多菲）</p><br/>
					<p>我的所有心事，所有的想法和念头，一切一切，过去，现在，将来，
					只归结为一个声音，一个象征，一个语调，
					如果它响起来，那么它只能是：我爱你（燕妮 马克思）</p><br/>
					<p> 时间会慢慢地让您了解，一个外表很冷漠又很怕羞的人
					，他的整颗心却充满了对您的爱。（巴斯德）</p><br/>
					<p>我从灵魂深处爱你，我愿意把生命交给你，
					由你接受多少就多少，当初是这样，现在也绝不变更。（勃朗宁）</p><br/>
					<p>你是我的生命，我爱你。（拜伦）</p><br/>
					<p> 犹如两颗相遇的流星，心灵撞击出光和热，光和热中你我融为一体，
					你中有我，我中有你。
					相处又如两颗恒星，明明亮亮，双双悬在生活的夜空。</p><br/>
					<p>不是因为寂寞才想你，是因为寂寞时想的都是你。</p><br/>
					<p>爱你，却要无欲无求，好难！爱你，却要偷偷摸摸，好累！
					爱你，却让自己心碎，好惨！但这一切竟然心甘情愿，好傻！</p><br/>
					<p>有了你，我不再作孤飞与蓝天的雄鹰，
					宁愿停歇在你门前的那棵树上，看着你，守护你</p><br/>
					<p>看到你，我怕触电；看不到你，我需要充电；如果没有你，我会断电；
					爱你是我的职业，想你是我的事业，抱你是我的特长，吻你是我的专业！</p><br/>
					<p>傻是我的特长，痴是我的理想，当傻和痴交织在一起的时候，
					便是我梦想里最美的天堂！别笑我，我就这么痴心，
					我会傻傻地爱你痴痴地恋你，一直到老！</p><br/>
					<p>你对我绽出的第一个微笑，是在我心灵上流动的第一声爱的春雷。 
        			替你那个还没出现的另一半（也许此刻已出现）送束花给你！</p><br/>
        			<p>我愿为你背诵每一首情诗，我愿意做你的老师，
        			示范着执子之手如何解释…… </p><br/>
        			<p> 我的心是旷野的鸟，在你的眼睛里找到了天空</p><br/>
        			<p>遇到你我感到很幸福，但是我不能成为世界上最幸福的人，
        			因为我们在一起，我要让你成为世界上最幸福的人。</p><br/>
        			<p>我多么希望，有一个门口，早晨，
        			阳光照在草上，我们站着，扶着自己的门扇，
        			门很低，但太阳是明亮的。草在结它的种子，
        			风在摇它的叶子，我们站着，不说话，就十分美好。</p><br/>
        			<p>女王大人！原谅我吧！我知道我错了
        			，你若不能原谅我的话，那就不断的打电话骂我吧！
        			我愿意被你骂到老！</p><br/>
        			<h3>送朋友</h3><br/>
        			<p>一切的不顺心都是纸老虎！希望你开心！</p><br/>
        			<p> 这些日子你过得还好吗？也许忙碌改变了我们的生活，
        			但我永远珍惜我们的情谊。 </p><br/>
        			<p>有些情感，无需多么华美，只是简单的遇见，简单的想念
        			，哪怕它只是简单到：拉着你的手，迎着风走！</p><br/>
        			<p>不求同年同月同日生，但求同年同月同日疯 </p><br/>
        			<p> 所有人都说我很坚强，只有你劝我别逞强 </p><br/>
        			<p> 无私无邪无猜无疑的友情无价，你是我买不到的奢华 </p><br/>
        			<p>不管世界尽头多寂寞，你的身边一定有我</p><br/>
        			<p> 朋友是一颗心住在两个人的心房里</p><br/>
        			<p>替你那个他娘的还没出现的另一半送束花给你，
        			好好混，以后相互抱大腿。 
        			生日快乐么么哒，恭祝兄弟仙福永享寿与天齐。</p><br/>
        			<h3>送长辈</h3><br/>
        			<p>亲爱的妈妈，我也想嫁出去，
        			只是没遇到对的人。但我保证会过得很好，
        			你别担心。你和爸爸身体健康才是我最幸福的事情。
        			多出去走走，看看这个世界。</p><br/>
        			<p>亲爱的妈妈：您曾用您坚实的臂弯为我撑起一片蓝天；
        			而今，我也要用我日益丰满的羽翼为您遮挡风雨。
        			妈妈，我永远爱您！生日快乐！祝我的美女妈妈越来越青春，
        			身体健康，瘦成闪电，未来的我可以每个假期带你出去纵横~</p><br/>
        			<p>老爸你知道吗：每天都会有人赞叹我的聪明、优雅和帅气！
        			而我总是骄傲地说：俺爹出品，必属精品! 老爸：父亲节快乐!</p><br/>
        			<p>妈妈，我是您身边的一只备受关怀的小鸟，
        			今天为您衔来了一束芬芳的鲜花。 
        			引一缕清风，为妈妈带去轻松；采一缕阳光，
        			为妈妈送去芬芳；掬一捧清水，为妈妈消去疲惫；
        			送一束鲜花，为妈妈奉上祝福。祝妈妈生日快乐！</p><br/>
        			<p>不想时间过得那么快，因为我想有再多一点时间回家陪着你。
        			不要觉得自己老了，在别人眼里，你还只是我姐呢。
        			生日快乐，妈，我爱你！</p><br/>
        			<p>美丽动人可爱迷人的妈妈：生日快乐！青春永驻！
        			虽然不能陪伴在你身边，我的心一直陪伴着你，我爱你，妈妈。</p><br/>
        			<p>“洗衣做饭忙不完，每日忙碌不着闲，历经风霜添白发，
        			勤劳持家不知烦”。作为儿子女儿的我们，深知您每天的辛苦忙碌，
        			但作为儿子女儿的我们，同样要给您幸福，祝您生日快乐，幸福万年长。</p><br/>
        			<p> 父爱如山，父爱无言，您总是微笑着担起了整个家庭。
        			在我心中，您是全天下最好的爸爸。</p><br/>
        			<p>忘不了您和风细雨般的话语，荡涤了我心灵上的尘泥；
        			忘不了您浩荡东风般的叮咛，鼓起我前进的勇气。老师，我终生感激您！ </p><br/>
        			<p className='plast'>送花留言怎么写？有一句话说的好，
        			“想想你为什么送花，就知道自己要写什么了”，
        			把心中的真情写下，这就是最好的留言。</p><br/><br/>
	
				</div>
			</div>
		)
	}
}
export default TipsComponent1;