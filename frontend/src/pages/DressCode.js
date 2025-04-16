// File: src/pages/DressCode.js
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './DressCode.css';

const DressCode = () => {
  return (
    <section className="text-center py-5 dress-code-wrapper">
    <h2 className="dress-code-title">Dress Code</h2>
      <div className="container dress-code-container">
        <div className="mb-2">
          <h4 className="mb-3">Wedding Day</h4>
          <p className="lead">
            We cannot wait to be with you on our special day! The wedding dress code is <strong>beach formal attire</strong>, which means we suggest you wear a suit of any color, a nice midi length or long dress, or a pantsuit.
          </p>

          <div className="row mt-4 justify-content-center">
            <div className="col-md-4 mb-4">
              <img
                src="/dcexample3.png"
                alt="Suit of any color"
                className="img-fluid rounded shadow"
              />
              <p className="mt-2">Classic suits in any color.</p>
            </div>
            <div className="col-md-4 mb-4">
              <img
                src="/dcexample1.png"
                alt="Beach Formal Dress Example"
                className="img-fluid rounded shadow"
              />
              <p className="mt-2">Bonus points for color or fun patterns.</p>
            </div>
            <div className="col-md-4 mb-4">
              <img
                src="/dcexample2.png"
                alt="Beach Formal Dress Example"
                className="img-fluid rounded shadow"
              />
              <p className="mt-2">Flowy and festive is always welcome.</p>
            </div>
          </div>

          <div className="mt-4 list-wrapper">
            <h5>Need inspiration?</h5>
            <ListGroup className="custom-list">
              <ListGroup.Item action href="https://www.brides.com/beach-wedding-attire-4842339" target="_blank" rel="noreferrer">
                Brides.com: Beach Wedding attire
              </ListGroup.Item>
              <ListGroup.Item action href="https://www.theknot.com/content/what-to-wear-to-a-beach-wedding" target="_blank" rel="noreferrer">
                The Knot: What to Wear to a Wedding
              </ListGroup.Item>
              <ListGroup.Item action href="https://www.nancynarang.com/blog/2016/4/19/master-the-beach-wedding" target="_blank" rel="noreferrer">
                Master The Beach Wedding - Men's Style Guide
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <hr className="my-5" />

        <div className="mb-5">
          <h4 className="mb-3">Welcome Party</h4>
          <p className="lead">
            Join us for a <strong>White Party</strong> on Friday, 02/20/20256! Please wear all-white or ivory outfits — breezy white linens, white dresses, or classic ivory separates are all welcome.
          </p>
       
          <div className="row mt-4 justify-content-center ">
            <br/>
            <div className="col-md-4 mb-3">
              <img
                src="/dcex4.png"
                alt="White Outfit Example 1"
                className="img-fluid rounded shadow"
              />
              <p className="mt-2">White dresses</p>
            </div>
            <div className="col-md-4 mb-4">
              <img
                src="/dcex6.png"
                alt="White Outfit Example 2"
                className="img-fluid rounded shadow"
              />
              <p className="mt-2">White dresses, jumpsuits, or coordinated sets.</p>
            </div>
            <div className="col-md-4 mb-4">
              <img
                src="/dcex7.png"
                alt="White Outfit Example 2"
                className="img-fluid rounded shadow"
              />
              <p className="mt-2">Men's casual white button-ups & linen or khaki pants.</p>
            </div>
          </div>

          <div className="mt-4 list-wrapper">
            <h5>Need inspiration?</h5>
            <ListGroup className="custom-list">
              <ListGroup.Item action href="https://www.pinterest.com/search/pins/?q=white%20party%20women&rs=typed" target="_blank" rel="noreferrer">
                White Party - Women's Inspiration
              </ListGroup.Item>
              <ListGroup.Item action href="https://www.pinterest.com/search/pins/?q=white%20party%20outfit%20men&rs=ac&len=18&source_id=bLntfx6i&eq=white%20party%20outfit&etslf=1127" target="_blank" rel="noreferrer">
                White Party - Men's Inspiration
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;

