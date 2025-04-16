// File: src/pages/Travel.js
import React from 'react';
import './Travel.css';

const Travel = () => {
  return (
    <section className="travel-wrapper py-5">
      <div className="container travel-container">
        <h2 className="travel-title text-center mb-5">Travel Information</h2>

        <div className="section-block mb-5">
        <div class="row justify-content-between">
    <div class="col-4">
    <h4 className='wedding-t1'>Wedding Location</h4>
          <p>Bella Villa Estate, Pensacola, Florida</p>
          <p>10315 Gulf Beach Hwy, Pensacola, FL 32507</p>
            </div>
            <div class="col-4">
            <div className="wedding-location-image">
                    <img src="/bella.png" alt="Bella Villa Estate" className="img-fluid rounded shadow" />
                </div>
            </div>
        </div>
          <iframe
            title="Wedding Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.3115432610193!2d-87.42531818488594!3d30.341275781776315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890c71d7f3cc411%3A0x2e0376b85c2b1b71!2sBella%20Villa%20Estate!5e0!3m2!1sen!2sus!4v1648882222222"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="section-block mb-5">
          <h4> Transportation</h4>
          <p>The nearest airport is Pensacola International Airport (PNS), about 25 minutes away from the venue. Rental cars, Uber, and Lyft are available.</p>
        </div>

        <div className="section-block mb-5">
          <h4> Hotel Options</h4>
          <ul>
            <li><strong>Hilton Garden Inn Pensacola Beach</strong> – Beachfront with pool</li>
            <li><strong>Holiday Inn Express & Suites</strong> – Budget friendly, 15 minutes away</li>
            <li><strong>Margaritaville Beach Hotel</strong> – Great for relaxing by the ocean</li>
            <br/>
            <li><strong>We are currently working on a room block with Hitlon </strong> – Will update as soon as it complete</li>
          </ul>
        </div>

        <div className="section-block mb-5">
          <h4>Weather</h4>
          <p>February in Pensacola is typically mild with highs around 65°F and lows near 50°F. We recommend bringing layers and checking the forecast before you pack!</p>
        </div>

        <div className="section-block">
          <h4>Things To Do</h4>
          <ul>
            <li>Explore historic downtown Pensacola</li>
            <li>Visit the National Naval Aviation Museum</li>
            <li>Relax on Pensacola Beach</li>
            <li>Enjoy fresh seafood at Peg Leg Pete's</li>
            <li>Go dolphin watching or take a sunset cruise</li>
          </ul>
        </div>


        <div className="section-block">
          <ul>
            <br/>
            <li>Text Mason or Lexi for more details or if you have any questions!</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Travel;

