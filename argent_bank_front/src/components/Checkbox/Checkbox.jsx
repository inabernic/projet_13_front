
// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

/**
 * The checkbox which, when clicked, calls the onChange function with the name of the checkbox and whether it is checked or not
 *
 * @prop   {Boolean}  checked   [checked description]
 * @prop   {String}  name      [name description]
 * @prop   {Function}  onChange  [onChange description]
 *
 * @return  {React.ReactElement}   A React component that displays a checkbox
 */
const Checkbox = ({ checked, name, onChange }) => {
  function handleChange(evt) {
    const isChecked = evt.target.checked;
    onChange(name, isChecked);
  }

  return (
    <div className="input-remember">
      <input
        type="checkbox"
        id="remember-me"
        value={!!checked}
        onChange={handleChange}
        name={name}
      />
      <label htmlFor="remember-me">Remember me</label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  checked: false,
  onchange: () => {},
};
export default Checkbox;