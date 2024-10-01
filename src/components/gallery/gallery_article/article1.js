import React, { Component } from 'react';
import './article1.css';
import picture1 from './700x400.png';

class Article1 extends Component {
  render() {
    return (
      <div className='article1' style={{backgroundImage: 'url(' + picture1 + ')'} }>
        <div className="phrase">Merry Christmas</div>
      </div>
    )
  }
}

export default Article1;