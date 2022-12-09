import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
      <div className="error_container">
        <h1>Erreur 404</h1>
        <Link to="/">Back to Dasboard page</Link>
      </div>
  );
};

export default ErrorPage;