import React from 'react';
import { Link } from 'react-router-dom';

import './cardStyle.css';

export default function Card(props) {
  return (
    <div className='maincard'>
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={props.imgsrc} alt="" srcSet="" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            deserunt quidem impedit ut cumque eveniet ad praesentium maxime illo
            temporibus.
          </p>
          <Link to="#" className="btn btn-outline-success">
            Read more ...
          </Link>
        </div>
      </div>
    </div>
  );
}
