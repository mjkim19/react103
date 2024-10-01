import React, { Component } from 'react';
import './article5.css';
import picture5 from './500x490.png';

class Article5 extends Component {
  render() {
    return (
      <div className='article5' style={{backgroundImage: 'url(' + picture5 + ')'}}>
      </div>
    )
  }
}

export default Article5;