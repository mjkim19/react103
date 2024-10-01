import React, { Component } from 'react';
import './utility-bar.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class UtilityBar extends Component {
  render() {
    const Ulink = styled(Link)`
      text-decoration: none;
      color: lightgray;
      font-size: small;
    `
    return (
      <ul class="utility-bar">
        <li><Ulink to='#'>Contact</Ulink></li>
        <li><Ulink to='#'>Help</Ulink></li>
        <li><Ulink to='#'>Login</Ulink></li>
        <li><Ulink to='#'>Join</Ulink></li>
        <li><Ulink to='#'>Sitemap</Ulink></li>
      </ul>
    )
  }
}

export default UtilityBar;