import React from 'react';
import './SciFiBanner.css';
import img from "../../images/image2.png"

const SciFiBanner = () => {
  return (
    <section className="sci-fi-banner text-white text-center py-5">
      <div className="container">
        <div className="sci-fi-header-decoration">
          <div className="corner top-left" />
          <div className="corner top-right" />
          <div className="centerpiece" />
        </div>

        <h2 className="headline">Elevate Your Achievements Using<br />Premier IT Solution</h2>
        <p className="subheadline">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit
        </p>

        <div className="row mt-5 align-items-center">
          <div className="col-md-6 text-start sci-fi-text-lines">
            <div className="sci-fi-feature">
              <h5 className='text-pink' >LOREM IPSUM</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
              </p>
            </div>
            <div className="sci-fi-line" />

            <div className="sci-fi-feature">
              <h5 className='text-pink'>LOREM IPSUM</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
              </p>
            </div>
            <div className="sci-fi-line" />
          </div>

          <div className="col-md-6 position-relative">
            <div className="sci-fi-frame-container">
              <img
                src={img}
                alt="IT Illustration"
                className="img-fluid sci-fi-frame"
              />
              <div className="sci-fi-frame-decorations" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SciFiBanner;
