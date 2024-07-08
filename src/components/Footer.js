import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/Footer.css'; // Ensure no conflicting styles here
import logo from '../images/ClinicalScholarColor.png';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="footer__logo">
          <img src={logo} alt="Clinical Scholar" className="footer__logo-image" />
          <div className="footer__text">
            <p className="footer__logo-top-t">CLINICAL</p>
            <p className="footer__logo-bottom-t">SCHOLAR</p>
          </div>
        </div>
        <div className="footer__footer-text text-center ">
          <p>© Copyright Clinical Scholar</p>
          <p>Powered by Quinoid Business Solutions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
