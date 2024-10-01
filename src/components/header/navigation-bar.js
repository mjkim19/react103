import React, { Component } from 'react';
import './navigation-bar.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    const Nlink = styled(Link)`
      text-decoration: none;
      color: gray;
	    font-weight: bold;
      &:hover {
        color: blue;
      }
    `
    return (
      <ul class="navigation-bar">
        <li><Nlink to="#">DEPARTMENT</Nlink></li>
        <li><Nlink to="/gallery">GALLERY</Nlink></li>
        <li><Nlink to="#">YOUTUBE</Nlink></li>
        <li><Nlink to="#">COMMUNITY</Nlink></li>
        <li><Nlink to="#">LOCATION</Nlink></li>
      </ul>
    )
  }
}

export default NavigationBar;