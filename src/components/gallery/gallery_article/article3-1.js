import React, { Component } from 'react';
import './article3-1.css'
import picture3_1 from './290x95-1.png';

class Article3_1 extends Component {
  render() {
    return (
      <div className='article3-1' style={{backgroundImage: 'url(' + picture3_1 + ')'}}>
        <div class="phrase">Present</div>
      </div>
    )
  }
}

export default Article3_1;