import React, { Component } from 'react';
import './article.css';

class Article extends Component {
  render() {
    console.log(this.props.src);
    return (
      <article>
        <img src={this.props.src} alt=''></img>
        <div className='title_'>{this.props.title}</div>
        {this.props.quote}
      </article>
    )
  }
}

export default Article;