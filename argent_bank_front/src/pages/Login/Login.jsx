// @ts-nocheck
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import { checkEmail } from "../../utils/util";
import "./Login.css"


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
    }, []);
  
    // mauvais identifiants
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
    }, []);

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
          <Button nameClass="button" title="Sign In" type="submit" />
        </form>
      </section>
    </div>
  );
};

Login.propTypes = {
  id: PropTypes.string,
};

export default Login;