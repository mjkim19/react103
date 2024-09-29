import React, { Component } from 'react';
import './bar.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Bar extends Component {
  render() {
    var lists = [];
    var data = this.props.data;

    const LinkItem = styled(Link)`
      text-decoration: none;
      color: ${function () {
      if (this.props.name === 'utility') {
        return 'lightgray';
      } else if (this.props.name === 'navigation') {
        return 'gray';
      }
      }.bind(this)};
      font-size: ${function () {
      if (this.props.name === 'utility') {
        return 'small';
      }
      }.bind(this)};
      font-weight: ${function () {
      if (this.props.name === 'navigation') {
        return 'bold';
      }
      }.bind(this)};
      &:hover {
        color: ${function () {
          if (this.props.name === 'navigation') {
            return 'blue';
          }
        }.bind(this)}
      }
    `;
    

    for (let i = 0; i < data.length; i++) {
      lists.push(
        <li>
          <LinkItem to={data[i][0]}>{data[i][1]}</LinkItem>
        </li>
      )
    }

    return (
      <ul className={this.props.name}>
        {lists}
      </ul>
    )
  }
}

export default Bar;