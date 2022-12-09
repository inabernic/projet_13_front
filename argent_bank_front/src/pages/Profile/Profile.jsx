import React, { useEffect } from "react";
import AfterAuth from "../../features/AfterAuth/AfterAuth";
import Account from "../../features/Account/Account";
import { dataAmounts } from "../../../src/Data/DataCard";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./Profile.css";

/**
 * It returns a div with a Welcome component and a list of Account components
 * @returns  A div with a welcome component and a list of account components.
 */
const Profile = ({ userId }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof userId !== "undefined") {
      if (id !== userId) {
        console.log(id);
        console.log(userId);
        navigate("/page-error");
      }
    }
  });

  return (
    <div className="main bg-dark">
      <AfterAuth />
      <h2 className="sr-only">Accounts</h2>
      {dataAmounts.map((acc) => {
        return <Account key={acc.linkId} {...acc} />;
      })}
    </div>
  );
};

Profile.propTypes = {
  userId: PropTypes.string,
};
Profile.defaultProps = {
  userId: "",
};
export default Profile;