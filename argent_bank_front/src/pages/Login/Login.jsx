import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Input from "../../features/Input/Input";
import Checkbox from "../../features/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import { checkEmail } from "../../utils/util";
import "./Login.css"


/**
 * It is a functional component that renders a form to login a user
 *
 * @return  {React.ReactElement}
 */
/**
 * It is a functional component that renders a form to login a user
 *
 * @param   {Boolean}  isLogged    If the user is logged in
 * @param   {Sring}  email         User email
 * @param   {Sring}  id            User Id
 * @param   {Sring}  password      User password
 * @param   {Boolean}  checked     If the user has checked the option to recall data
 * @param   {Number}  errorStatus           Status error code
 * @param   {Sring}  errorMSG               Message error
 * @param   {Function}  getUserCredentials  Update user data
 * @param   {Function}  cleanMessage        Delete the message error
 * @param   {Function}  changeField         Return of the input
 * @param   {Function}  sendLoginForm       Send data to API
 *
 * @return  {React.ReactElement}
 */

const Login = ({
  changeField,
  sendLoginForm,
  isLogged,
  email,
  id,
  password,
  checked,
  errorStatus,
  errorMSG,
  getUserCredentials,
  cleanMessage,
}) => {
  const [log, setLog] = useState(false);
  const [errStatus, setErrStatus] = useState(null);
  const [local, setLocal] = useState(false);

  const navigate = useNavigate();

  const handleSendForm = (evt) => {
    evt.preventDefault();

    const email = evt.target[0].value.toLowerCase();
    const password = evt.target[1].value;
    const remember = evt.target[2].checked;

    if (checkEmail(email)) {
      sendLoginForm({ email, password, remember });
      console.log(email, password)
      console.log(sendLoginForm)
    }
  };

  // redirection
  useEffect(() => {
    setLocal(!!sessionStorage.getItem("token"));
    setLog(isLogged);

    if (local && !errStatus) {
      getUserCredentials();
      if (log && id.length > 0) {
        navigate(`/user/${id}`, { replace: true });
      }
    }
  }, [][(log, local)]);


  //wrong credentials
  useEffect(() => {
    setErrStatus(errorStatus);
    const span = document.querySelector(".error_login");
    if (typeof errStatus === "number") {
      span.classList.add("active");
      let timer;
      timer = setTimeout(() => {
        span.classList.remove("active");
        cleanMessage();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [][(errorStatus, errStatus, errorMSG)]);

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <img src="./assets/user_bank.svg" alt="user icon" className="user_icon sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSendForm}>
          <Input
            type="email"
            label="username"
            onChange={changeField}
            name={"email"}
            value={email}
            placeholder="email"
            focus={true}
          />
          <Input
            type="password"
            label="password"
            onChange={changeField}
            name="password"
            value={password}
            placeholder="password"
          />
          <Checkbox
            name={"toRemember"}
            onChange={changeField}
            checked={checked}
          />
          {((<br />), (<span className="error_login">{errorMSG} </span>))}
          <Button className="button" title="Sign In" type="submit" />
        </form>
      </section>
    </div>
  );
};

Login.propTypes = {
  id: PropTypes.string,
};

export default Login;