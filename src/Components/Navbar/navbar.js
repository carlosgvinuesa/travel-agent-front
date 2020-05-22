import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, logout }) => {
  return (
    <header>
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link to="/">Alambic</Link>
            </li>
            <li className="uk-active">
              <Link to="/collection/reservations">Data Bases</Link>
              <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li><Link to='/collection/clients'>Clients</Link></li>
                    <li><Link to='/collection/hotels'>Hotels</Link></li>
                    <li><Link to='/collection/restaurants'>Restaurants</Link></li>
                    <li><Link to='/collection/experiences'>Experiences</Link></li>
                    <li><Link to='/collection/transport'>Transport</Link></li>
                    <li><Link to='/collection/users'>Users</Link></li>
                  </ul>
                </div>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {user._id ? (
              <li>
                <Link to="/profile">
                  <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                    <div className="uk-width-expand">
                      <div className="uk-margin-remove-bottom">Hi {user.name}!</div>
                    </div>
                  </div>
                </Link>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li onClick={logout}>Logout</li>
                  </ul>
                </div>
              </li>
            ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;