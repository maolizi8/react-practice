require('styles/reset.css')
import React from 'react';
import Header from './baidu/header/header'
import Section from './baidu/section/section';
import Topnav from './baidu/header/topnav';

// React.initializeTouchEvents(true)

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
  	}else{
  		this.setState({
  			navDispOrNot:'topnav fade'
  		})
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
