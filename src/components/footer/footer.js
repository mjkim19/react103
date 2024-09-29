import React, { Component } from 'react';
import './footer.css';
import InnerBox from './inner-box';
import Information from './information';

class Footer extends Component {
  render() {
    return (
      <footer>
        <InnerBox></InnerBox>
        <Information></Information>
      </footer>
    )
  }
}

export default Footer;