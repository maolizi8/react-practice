require('components/baidu/header/header.css');
import React from 'react';

class Topnav extends React.Component {
  constructor(props){
     super(props);
    this.state={
      navDispOrNot:this.props.navTogle?this.props.navTogle:'topnav fade',
      classfirst:'togle_dian dian_active',
      classsecond:'togle_dian',
      prod_section_sub:'prod_section_sub'
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({navDispOrNot:nextProps.navTogle?nextProps.navTogle:'topnav fade'});
    }
	choseNavBtn(e){
    var target=e.target;
    var liList=target.parentNode.childNodes;
    for (var i = liList.length - 1; i >= 0; i--) {
      liList[i].className=''
    }
    target.className='active_li'
  }
  render() {
    return (
      <div className={this.state.navDispOrNot}>
          <ul onClick={this.choseNavBtn}>
            <li>推荐</li>
            <li>视频</li>
            <li>娱乐</li>
            <li>体育</li>
            <li>时尚</li>
            <li>国际</li>
          </ul>
      </div>
    );
  }
}

Topnav.defaultProps = {
  
};
export default Topnav;