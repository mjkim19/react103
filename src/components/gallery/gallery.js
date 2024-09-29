import React, { Component } from 'react';
import './gallery.css';
import Header from '../header/header';
import Article from './article';
import ArticleF from './articlef';

class Gallery extends Component {
  render() {
    var phrase4_1 = "Someone who solves a problem you\ndidn't know you had, in a way that\nyou don't understand"
    return (
      <div className='gallery'>
        <Header></Header>
        <section>
          <Article name='article1' phrase='Merry Christmas'></Article>
          <Article name='article2' phrase='Frozen'></Article>  
          <Article name='article3-1' phrase='Present'></Article>
          <Article name='article3-2'></Article>
          <div>
            <Article name='article4-1' phrase={phrase4_1}></Article>
            <Article name='article4-2' phrase='Be Rich!!'></Article>
          </div>
          <Article name='article5'></Article>
          <Article name='article6' phrase='Life is entirely Y.O.U.R.S'></Article>
          <ArticleF></ArticleF>
        </section>
      </div>
      
    )
  }
}

export default Gallery;