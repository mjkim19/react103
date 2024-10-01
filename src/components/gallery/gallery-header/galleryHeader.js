import React, { Component } from 'react';
import './galleryHeader.css';
import UtilityBar from '../../header/utility-bar';
import NavigationBar from '../../header/navigation-bar';

class GalleryHeader extends Component {
  render() {
    return (
      <div class='gallery-header'>
        <div className='inner-box'>
          <UtilityBar></UtilityBar>
          <h1>WON LAB</h1>
          <NavigationBar></NavigationBar>
        </div>
      </div>
    )
  }
}

export default GalleryHeader;