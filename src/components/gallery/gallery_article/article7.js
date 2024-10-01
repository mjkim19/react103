import React, { Component } from 'react';
import './article7.css'
import picture7 from './1000x361.png';

class Article7 extends Component {
  render() {
    return (
      <div className='article7' style={{ backgroundImage: 'url(' + picture7 + ')'}}>
        <div className='inner-box'>
          <div class="phrase"><span>Programmer</span> is the perfect future.<br/>Let's be <span>the Digital Nomad!</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Article7;