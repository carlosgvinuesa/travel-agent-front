import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, logout }) => {
  return (
    <header className="navbar">
      <nav className="uk-navbar-container navbar" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            {user._id ? (

              <li className="uk-active logo-navbar"><Link to="/home"><img src="/images/logo-color.png"/></Link></li>
            ) : null}

          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {user._id ? (
              <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <a>Data Bases</a>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li><Link to='/collection/hotels'>Hotels</Link></li>
                      <li><Link to='/collection/restaurants'>Restaurants</Link></li>
                      <li><Link to='/collection/experiences'>Experiences</Link></li>
                      <li><Link to='/collection/transports'>Transport</Link></li>
                      <li><Link to='/collection/userbase'>Users</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="uk-active">
                  <Link to="collection/reservations">Reservations</Link>
                </li>
                <li className="uk-active"><a className="text" onClick={logout}>Logout</a></li>
                <li className="img-navbar"><img src="/images/logo-img-color.png" /></li>
              </ul>
            ) : (null
              )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;