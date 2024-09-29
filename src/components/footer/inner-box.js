import React, { Component } from 'react';
import './inner-box.css';

class InnerBox extends Component {
  render() {
    return (
      <div class="inner-box">
        <h1>WON LAB</h1>
        <ul>
          <li>&copy; 2022-2023 Won Lab, Inc.</li>
          <li>|</li>
          <li>Privacy Notice</li>
          <li>|</li>
          <li>Terms of Use</li>
          <li>|</li>
          <li>Site map</li>
        </ul>
      </div>
    )
  }
}

export default InnerBox;