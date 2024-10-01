import React, { Component } from 'react';
import './gallery.css';
import GalleryHeader from './galleryHeader';
import Article1 from '../gallery_article/article1';
import Article2 from '../gallery_article/article2';
import Article3_1 from '../gallery_article/article3-1';
import Article3_2 from '../gallery_article/article3-2';
import Article4_1 from '../gallery_article/article4-1';
import Article4_2 from '../gallery_article/article4-2';
import Article5 from '../gallery_article/article5';
import Article6 from '../gallery_article/article6';
import Article7 from '../gallery_article/article7';

class Gallery extends Component {
  render() {
    return (
      <div className='gallery'>
        <GalleryHeader></GalleryHeader>
        <div className='section'>
          <Article1></Article1>
          <Article2></Article2>
          <Article3_1></Article3_1>
          <Article3_2></Article3_2>
          <div className='article4'>
            <Article4_1></Article4_1>
            <Article4_2></Article4_2>
          </div>
          <Article5></Article5>
          <Article6></Article6>
          <Article7></Article7>
        </div>
      </div>
    )
  }
}

export default Gallery;