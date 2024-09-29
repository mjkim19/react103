import React, { Component } from 'react';
import './header.css';
import Bar from './bar';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='inner-box'>
          <Bar name='utility' data={[['#', 'Contact'], ['#', 'Help'], ['#', 'Login'], ['#', 'Join'], ['#', 'Sitemap'],]} />
          <h1>WON LAB</h1>
          <Bar name='navigation' data={[['#', 'DEPARTMENT'], ['/gallery', 'GALLERY'], ['#', 'YOUTUBE'], ['#', 'COMMUNITY'], ['#', 'LOCATION']]} />
        </div>
      </header>
    )
  }
}

export default Header;