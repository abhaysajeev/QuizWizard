import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/Header.css'; 
import logo from '../images/ClinicalScholarColor.png';

const Header = () => {
  const storedUserData = localStorage.getItem('userData');
  const userData = storedUserData ? JSON.parse(storedUserData) : {};
  const category = userData.category ? userData.category.toUpperCase() : "UNKNOWN";

  return (
    <header className="d-flex justify-content-between align-items-center py-3 px-4">
      <div className="logo">
        <img src={logo} alt="Clinical Scholar" />
        <div className="text">
          <p className="logo-top-t">CLINICAL</p>
          <p className="logo-bottom-t">SCHOLAR</p>
        </div>
      </div>
      <div className="exam-category text-center">
        <h2>EXAM CATEGORY: {category}</h2>
      </div>
    </header>
  );
}

export default Header;
