import React, { Component } from 'react';
import './article4-2.css'
import picture4_2 from './490x240-2.png'

class Article4_2 extends Component {
  render() {
    return (
      <div className='article4-2' style={{backgroundImage: 'url(' + picture4_2 + ')'}}>
        <div class="phrase">Be Rich!!</div>
      </div>
    )
  }
}

export default Article4_2;