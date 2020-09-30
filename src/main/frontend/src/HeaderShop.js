import React from 'react';
import './Header.css';

function HeaderShop() {
    return (
        


    <nav className="navbar navbar-dark navbar-expand-sm fixed-top">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand mr-auto" href="/"> <img src="https://cdn3.iconfinder.com/data/icons/abstract-lines/100/abstract_lines_triangle_3-512.png" height="30" width="41" alt="logo" /> </a>
        <div className="collapse navbar-collapse" id="Navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"> <a  className="nav-link" href="/"> <span className="fa fa-home fa-lg"></span> Home</a></li>
            <li className="nav-item"> <a  className="nav-link" href="./aboutus"><span className="fa fa-info fa-lg"></span>About</a></li>
            <li className="nav-item"> <a  className="nav-link" href="./contactus"><span className="fa fa-address-card fa-lg"></span>Contact</a></li>

          </ul>
          <span className="navbar-text">
            <a id="loginBtn">
                <span className="fa fa-sign-in"></span>Shop
            </a>
          </span>
        </div>

      </div>
    </nav>

    

    );
}

export default HeaderShop

