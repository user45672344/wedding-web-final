// File: src/pages/Gallery.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="text-center py-5 gallery-wrapper">
      <div className="container gallery-container">
        <h2 className="gallery-title">Photo Gallery</h2>

        <Carousel fade interval={2000} className="shadow carousel-custom">
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="/roof1.jpg"
              alt="Gallery Image 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img1.jpg"
              alt="Gallery Image 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img16.JPG"
              alt="Gallery Image 3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img5.jpg"
              alt="Gallery Image 4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img6.jpg"
              alt="Gallery Image 5"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img7.jPEG"
              alt="Gallery Image 6"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img8.jPEG"
              alt="Gallery Image 7"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img9.jPEG"
              alt="Gallery Image 8"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img10.jPEG"
              alt="Gallery Image 9"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img11.jPEG"
              alt="Gallery Image 10"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img12.jPEG"
              alt="Gallery Image 11"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img13.jPEG"
              alt="Gallery Image 12"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img14.jPEG"
              alt="Gallery Image 13"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img15.jPEG"
              alt="Gallery Image 14"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img16.jPEG"
              alt="Gallery Image 15"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img3.jpg"
              alt="Gallery Image 16"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img2.jPEG"
              alt="Gallery Image 17"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;

