import React, { Component } from 'react';
import './header.css';
import UtilityBar from './utility-bar';
import NavigationBar from './navigation-bar';


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='inner-box'>
          <UtilityBar></UtilityBar>
          <h1>WON LAB</h1>
          <NavigationBar></NavigationBar>
        </div>
      </div>
    )
  }
}

export default Header;