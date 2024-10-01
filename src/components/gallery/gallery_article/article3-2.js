import React, { Component } from 'react';
import './article3-2.css';
import picture3_2 from './290x95-2.png';

class Article3_2 extends Component {
  render() {
    return (
      <div className='article3-2' style={{backgroundImage: 'url(' + picture3_2 + ')'}}>
      </div>
    )
  }
}

export default Article3_2;