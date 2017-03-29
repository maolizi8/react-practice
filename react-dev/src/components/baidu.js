require('styles/reset.css')
import React from 'react';
import Header from './baidu/header/header'
import Section from './baidu/section/section';
import Topnav from './baidu/header/topnav';

//React.initializeTouchEvents(true)
//注意，事件的回调被绑定在了 react 组件上，而不是原始的元素上。React 通过一个 autobinding 过程自动将方法绑定到当前的组件实例上。

class Baidu extends React.Component {
constructor(props){
     super(props);
    this.state={
      navDispOrNot:'topnav fade'
    }
  }
	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll.bind(this));
  	}
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll() {
  	if (document.body.scrollTop>209) {
  		this.setState({
  			navDispOrNot:'topnav'
  		})
  		//console.log(this.state.navDispOrNot)
  	}else{
  		this.setState({
  			navDispOrNot:'topnav fade'
  		})
  		//console.log(this.state.navDispOrNot)
  	}
  }
   render() {
    return (
    	<div id='baidu'>
    	  <Topnav navTogle={this.state.navDispOrNot}/>
    	  <Header location='北京' />
    	  <Section />
    	</div>
    );
  }
}

Baidu.defaultProps = {
  
};
export default Baidu;
