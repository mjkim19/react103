import React, { Component } from 'react';
import './section.css';
import Article from './article';
import Article1 from './article1.png';
import Article2 from './article2.png';
import Article3 from './article3.png';
import Article4 from './article4.png';

class Section extends Component {
  render() {
    return (
      <section>
        <div className='section_title'>RECENT NEWS</div>
        <Article src={Article1} title='X-mas' quote='X-mas is a common abbreviation of the word Christmas'></Article>
        <Article src={Article2} title='Bell' quote='a hollow metal object shaped like a cup'></Article>
        <Article src={Article3} title='Bear' quote='a large, strong wild mammal with a thick fur coat that lives especially in colder parts of Europe, Asia, and
			North America'></Article>
        <Article src={Article4} title='Socks' quote='a piece of clothing made from soft material that covers your foot and the lower part of your leg'></Article>
      </section>
    )
  }
}

export default Section;