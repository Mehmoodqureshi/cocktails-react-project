import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>OOP!! IT'S A DEAD END</h1>
        <Link to="/" className="btn btn-primary">
          GO TO HOME
        </Link>
      </div>
    </section>
  );
};

export default Error;
