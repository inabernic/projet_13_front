import React from "react";

/**
 the return of a div with a "footer" class
 *
 * @return  {React.ReactElement}
 */
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">
        Copyright {new Date().getFullYear()} Argent Bank
      </p>
    </div>
  );
};

export default Footer;