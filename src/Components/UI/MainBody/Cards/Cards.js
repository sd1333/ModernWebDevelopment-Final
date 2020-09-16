import React from 'react';

import Card from './Card';
import img1 from '../../../../assets/worms-eyeview-of-green-trees-957024.jpg';
import ourbelief from '../../../../assets/ourbelief.jpg';
import staff from '../../../../assets/staffs.jpg';

export default function Cards() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={ourbelief} title="Our Beliefs" />
          </div>
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={staff} title="Staff" />
          </div>
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={img1} title="Message Library" />
          </div>
        </div>
      </div>
    </div>
  );
}
