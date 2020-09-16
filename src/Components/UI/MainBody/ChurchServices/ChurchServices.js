import React from 'react';
import kidsactivity from '../../../../assets/kidsactivity.jpg';
import welcome from '../../../../assets/whattoexpect.jpg';
import churchdress from '../../../../assets/churchdress.jpg';
export default function ChurchServices() {
  return (
    <div className="container mt-5 mb-5">
      <div className="card-deck ">
        <div className="card border-0" style={{ width: '18rem' }}>
          <img className="card-img" src={welcome} alt="Approaching the building" />
          <div className="card-body text-center">
            <h6 className="card-title">Approaching the building...</h6>
            <p className="card-text">
              We have a small parking lot in the "front" of our church (along
              Borst Ave) and a large parking lot in the "back" (along Eshom). If
              you park in the front lot, the "Office Entrance" will be the best
              place for you to enter. If you park in the back lot, you will see
              a sign for our "Main Entrance." Look for the signs that say
              "WELCOME."
            </p>
          </div>
        </div>
        <div className="card border-0" style={{ width: '18rem' }}>
          <img className="card-img" src={churchdress} alt="What should I wear" />
          <div className="card-body text-center">
            <h6 className="card-title">What should I wear?</h6>
            <p className="card-text">
              Our Sunday atmosphere is relaxed and casual. People wear anything
              from business casual to jeans and t-shirts. Wear whatever you are
              most comfortable in!
            </p>
          </div>
        </div>
        <div className="card border-0" style={{ width: '18rem' }}>
          <img className="card-img" src={kidsactivity} alt="What is there for kids" />
          <div className="card-body text-center">
            <h6 className="card-title">What is there for kids?</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
