import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
/**
 *
 *  It is a function that returns a button element with a className, type and onClick event handler.
 * @prop   {String}  className  content of the className attribute
 * @prop   {String}  title      title of the button
 * @prop   {String}  type       type of button
 * @prop   {Function} onClick    event of the button
 * @return  {React.ReactElement}
 */
const Button = ({ className, title, type, onClick }) => {
  function handleClick(evt) {
    return onClick(evt);
  }
  return (
    <button className={className} type={type} onClick={handleClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: () => { },
};
export default Button;