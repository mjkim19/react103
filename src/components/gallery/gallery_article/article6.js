import React, { Component } from 'react';
import './article6.css';
import picture6 from './1000x371.png';

class Article6 extends Component {
  render() {
    return (
      <div className='article6' style={{backgroundImage: 'url(' + picture6 + ')'}}>
        <div class="phrase">Life is entirely Y.O.U.R.S</div>
      </div>
    )
  }
}

export default Article6;