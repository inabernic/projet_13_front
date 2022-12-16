import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import "./Account.css"

/**
 * It is a function that returns a section html tag that contains a title, amount, offer, type and linkId
 * 
 * @prop {String} title Account name
 * @prop {String} amount The amount in the account
 * @prop {Number} deal The number of transactions on the account
 * @prop {String} type The type of situation
 * @prop {Number} linkId The id of the account
 * @returns {React.ReactElement}
 */
const Account = ({ title, amount, deal, type, linkId }) => {
    return (
        <section className="account">
            <div className="account__content-wrapper">
                <p className="account__content-wrapper__title">
                    {"Argent Bank " + title} ({"x" + deal})
                </p>
                <h1 className="account__content-wrapper__amount">${amount}</h1>
                <p className="account__content-wrapper__amount-description">
                    {type + " Balance"}
                </p>
            </div>
            <div className="account-content-wrapper verif">
                <Link to={`account/${linkId}`} className="account__link-button">
                    <Button
                        className="transaction-button"
                        title="View transactions"
                        type="button"
                    ></Button>
                </Link>
            </div>
        </section>
    );
};

Account.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    deal: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    linkId: PropTypes.number.isRequired,
};
export default Account;