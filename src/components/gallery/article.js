import React, { Component } from 'react';
import './article.css';

class Article extends Component {
  render() {
    return (
      <div className='galleryArticle'>
        <article className={this.props.name}>
          <div className='phrase'>
            {this.props.phrase}
          </div> 
        </article>
      </div>
    )
  }
}

export default Article;