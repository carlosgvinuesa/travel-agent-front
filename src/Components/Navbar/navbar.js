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
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {user._id ? (
              <ul className="uk-navbar-nav">
                <li>
                  <button><Link to="/hotels/new">New Hotel</Link></button>
                  <button><Link to="/clients/new">New Client</Link></button>
                  <button><Link to="/restaurants/new">New Restaurant</Link></button>
                  <button><Link to="/experiences/new">New Experience</Link></button>
                  <button><Link to="/transports/new">New Transport</Link></button>
                  <button><Link to="/inquiries/new">New Inquiry</Link></button>
                  <button><Link to="/reservations/new">New Reservation</Link></button>
                </li>
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
              </ul>
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