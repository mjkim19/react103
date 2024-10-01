import React, { Component } from 'react';
import './footer.css';
import FInnerBox from './footer-inner-box';
import Information from './information';

class Footer extends Component {
  render() {
    return (
      <footer>
        <FInnerBox></FInnerBox>
        <Information></Information>
      </footer>
    )
  }
}

export default Footer;