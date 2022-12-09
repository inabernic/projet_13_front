import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import './Header.css'


/**
 * It is a function that returns a navigation element with a logo and a link to the page of
login if the user is not logged in, and a link to the user's profile and a link to log out if the user is logged in
 *
 * @prop   {String}  firstName       user's first name
 * @prop   {Boolean}  isLogged        the user is logged in
 * @prop   {Function}  disconnect      the user has chosen to keep his session
 * @prop   {Function}  onlyDisconnect  the user to log off
 * @prop   {String}  id              id of the user
 * @prop   {Boolean}  remember        choice of a session (open / closed)
 *
 * @return  {React.ReactElement} A navigation element with a logo and a link to the login page.
 */
const Header = ({
  firstName,
  isLogged,
  disconnect,
  onlyDisconnect,
  id,
  remember,
}) => {
  function handleDisconnect() {
    if (remember) {
      disconnect(remember);
    } else {
      onlyDisconnect();
    }
  }

  return (
    <nav className="header__nav">
      <div className="header__nav-logo">
        <Link to="/">
          <img className="logo header__nav-logo__image"
            src="../assets/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
      </div>
      {/* Token */}
      <div className="header__nav__item">
        {!isLogged ? (
          <Link to="/login">
            <img className="user_icon" src="../assets/user_bank.svg" alt="user icon"  />
            Sign in
          </Link>
        ) : (
          <>
            <Link to={`/user/${id}`}>
              <img src="../assets/user_bank.svg" alt="user icon" className="user_icon" />
              {firstName}
            </Link>
            <Link to="/" onClick={handleDisconnect}>
              <img src="../assets/sign_out.svg" alt="Logout icon" className="user_icon" /> Sign
              Out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  remember: PropTypes.bool.isRequired,
  disconnect: PropTypes.func,
  onlyDisconnect: PropTypes.func,
};
Header.defaultProps = {
  id: "",
  remember: false,
};
export default Header;