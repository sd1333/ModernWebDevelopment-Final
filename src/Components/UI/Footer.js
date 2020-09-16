import React from 'react';

export default function Footer() {
  return (
    <footer className="page-footer font-small mt-5">
      <div className="container-fluid">
        <hr />
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item" style={{ color: '#3B5998' }}>
            <i className="fab fa-facebook fa-2x"></i>
          </li>
          <li className="list-inline-item" style={{ color: '#00B6F1' }}>
            <i className="fab fa-twitter fa-2x"> </i>
          </li>
          <li className="list-inline-item" style={{ color: '#2C6A93' }}>
            <i className="fab fa-instagram fa-2x"> </i>
          </li>
          <li className="list-inline-item" style={{ color: '#04669A' }}>
            <i className="fab fa-linkedin-in fa-2x"> </i>
          </li>
          <li className="list-inline-item" style={{ color: '#C31A1E' }}>
            <i className="fab fa-youtube fa-2x "> </i>
          </li>
        </ul>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="/"> HashCoders</a>
      </div>
    </footer>
  );
}
