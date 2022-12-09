import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase} from '../../../src/utils/util';
import "./Input.css";

/**
 * It's a function that returns a div with a label and an input
 *
 * @prop   {String}  type   Type of the input
 * @prop   {String}  label  Label content and htmlFor property as well as the input id
 * @prop   {function} onChange initiate the action
 * @prop   {String}  value input value
 * @prop   {String}  name input identifier
 * @prop   {String}  placeholder what is expected in the field
 * @prop   {Boolean}  focus autofocus
 *
 * @return  {React.ReactElement} a div with a label and an input
 */
const Input = ({ type, label, onChange, value, name, placeholder, focus }) => {
  const handleChange = (evt) => {
    const inputValue = evt.target.value;
    onChange(name, inputValue);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{fromLowerToUpperCase(label)}</label>
      <input
        type={type}
        id={label}
        required
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        autoFocus={focus}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
  label: PropTypes.string,
  focus: PropTypes.bool,
};
Input.defaultProps = {
  require: false,
  label: "",
  focus: false,
};
export default Input;