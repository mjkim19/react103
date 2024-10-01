import React, { Component } from 'react';
import './article4-1.css'
import picture4_1 from './490x240-1.png';

class Article4_1 extends Component {
  render() {
    return (
      <div className='article4-1' style={{ backgroundImage: 'url(' + picture4_1 + ')'}}>
        <div class="phrase">Someone who solves a problem you<br/>didn't know you had, in a way that<br/>you don't
        understand.</div>
      </div>
    )
  }
}

export default Article4_1;