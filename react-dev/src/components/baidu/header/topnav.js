require('components/baidu/header/header.css');
import React from 'react';

class Topnav extends React.Component {
  constructor(props){
     super(props);
    this.state={
      classfirst:'togle_dian dian_active',
      classsecond:'togle_dian',
      prod_section_sub:'prod_section_sub'
    }
  }
	choseNavBtn(e){
    var target=e.target;
    // target.className.add('active_li');
  }
  render() {
    return (
      <div className='topnav'>
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