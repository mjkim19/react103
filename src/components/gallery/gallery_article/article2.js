import React, { Component } from 'react';
import './article2.css';
import picture2 from './290x190.png'

class Article2 extends Component {
  render() {
    return (
      <div className='article2' style={{backgroundImage: 'url(' + picture2 + ')'}}>
        <div class="phrase">Frozen</div>
      </div>
    )
  }
}

export default Article2;