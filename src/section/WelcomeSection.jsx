import React from "react";

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-left">
        <img className="welcome-img2" src="welcome-2.jpg" alt="" />
        <img className="welcome-img1" src="welcome-1.jpg" alt="" />
        <div className="message-container">
          <div className="triangle">
            {/* <div className="triangle-center"></div> */}
            <div className="welcome-msg">
              <p className="welcome-count">15,350+</p>
              <p>Clients Worldwide</p>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome-right">
        <h2>TransMax Logistics</h2>
        <h2>
          Around <span>the World</span>
        </h2>
        <p>
          Transmax is the world's driving worldwide coordinations supplier - we
          uphold industry and exchange the worldwide trade of merchandise
          through land transport.
        </p>
        <p className="welcome-para">
          Out worth added administrations guarantee the progression of products
          proceeds consistently and supply chains stay lean and streamlined for
          progress.
        </p>
        <button className="button welcome-btn">MORE ABOUT US</button>
      </div>
    </div>
  );
};

export default WelcomeSection;
