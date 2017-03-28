require('components/baidu/section/section.css');
import React from 'react';

class Section extends React.Component {
  constructor(props){
     super(props);
    this.state={
      newsList:[{title:'你真的愿意多花689元买个红色版iPhone 7 吗？',source:'新浪微博',time:'08:43',img:['images/new01.jpg','images/new02.jpg','images/new03.jpg']},
                {title:'丁俊晖微博开炮:被强行阻止参赛 那一刻简直气疯',source:'网易新闻',time:'13:11',img:[]},
                {title:'考上清华不会游泳不能毕业 , “旱鸭子”们炸锅了……',source:'myzaker',time:'00:03',img:['images/news2.01.jpg','images/news2.02.jpg','images/news2.03.jpg']},
                {title:'农村人看不起的它，到城里却成了抢手货，城里人用它煮着吃。',source:'全美食',time:'14:57',img:['images/news3.01.jpg','images/news3.02.jpg','images/news3.03.jpg']}]
    }
  }
	
  render() {
    var newsList=this.state.newsList;
    return (
      <div>
      {newsList.map(function(item){
        var imglist=item.img
        return (
          <a href='' className='newsbox'>
            <div className='section'>
              <h2>{item.title}</h2>
              <div className='img_sm'>
                {imglist.map(function(imgs){
                    return (
                      <div className='img_sm_item'><img src={imgs} /></div>
                    )
                  }
                  )
                }
              </div>
              <div className='newsSource'>{item.source} {item.time}</div>
            </div>
          </a>
          )
      })}
      </div>
    );
  }
}

Section.defaultProps = {
};
export default Section;