import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Input from "../../features/Input/Input";

import "./AfterAuth.css"


/**
 *Display of the welcome message with the first and last name of the user,
The button for modify the name, 
The form to modify the name and a confirmation message
 *
 * @param   {String}  firstName     user's first name
 * @param   {String}  lastName      user's last name
 * @param   {Function}  newIdentity   event trigger function
 * @param   {String}  message       confirmation message that the request has been taken into account
 * @param   {Function}  cleanMessage  event trigger function
 *
 * @return  {React.ReactElement}
 */
const AfterAuth = ({
    firstName,
    lastName,
    newIdentity,
    message,
    cleanMessage,
}) => {
    /**
     * Verification if the firstName variable is empty or not. 
     * If not empty, it adds the class active at form container
     */
    function handleRenderModale() {
        if (firstName.length > 0) {
            document
                .querySelector(".formulaire_container")
                .classList.toggle("active");
        }
    }

    /**
     * The function takes an event as an argument, prevents the event's default action,
     * get the values ​​of the first and second inputs, then call the newIdentity function with
     * the values ​​of the first and second inputs as arguments
     * @param {} evt -the event object
     */
    function handleSendForm(evt) {
        evt.preventDefault();

        const f_Name = evt.target[0].value;
        const l_Name = evt.target[1].value;

        newIdentity({ f_Name, l_Name });
    }

    useEffect(() => {
        let time;
        const span = document.querySelector(".formulaire_container__confirmation");
        span.classList.toggle("active");
        time = setTimeout(() => {
            span.classList.toggle("active");
            cleanMessage();
        }, 2000);
        return () => clearTimeout(time);
    });

    return (
        <div className="header">
            <h1>
                Welcome back
                <br />
                <span>
                    {firstName} {lastName} !
                </span>
            </h1>
            <Button
                type="button"
                title="Edit Name"
                nameClass="edit-button edit-name"
                onClick={handleRenderModale}
            />

            <form className="formulaire_container" onSubmit={handleSendForm}>
                <div className="formulaire_container__bloc-input">
                    <Input
                        type={"text"}
                        name={"firstName"}
                        value={firstName}
                        placeholder={firstName}
                    />
                    <Input
                        type={"text"}
                        name={"lastName"}
                        value={lastName}
                        placeholder={lastName}
                    />
                </div>
                {<span className="formulaire_container__confirmation">{message}</span>}
                <div className="formulaire_container__bloc-button">
                    <Button type="submit" title="Save" nameClass="edit-button save" />
                    <Button
                        type="button"
                        title="Cancel"
                        nameClass="edit-button cancel"
                        onClick={handleRenderModale}
                    />
                </div>
            </form>
        </div>
    );
};

AfterAuth.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    newIdentity: PropTypes.func,
    message: PropTypes.string,
    cleanMessage: PropTypes.func,
};

export default AfterAuth;