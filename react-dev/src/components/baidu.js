require('styles/reset.css')
import React from 'react';
import Header from './baidu/header/header'
import Topnav from './baidu/header/topnav';
import Section from './baidu/section/section';

//React.initializeTouchEvents(true)
//注意，事件的回调被绑定在了 react 组件上，而不是原始的元素上。React 通过一个 autobinding 过程自动将方法绑定到当前的组件实例上。

class Baidu extends React.Component {
   render() {
    return (
    	<div>
    	<Topnav />
    	  <Header location='北京' />
    	  <Section />
    	</div>
    );
  }
}

Baidu.defaultProps = {
  
};
export default Baidu;
