import React from "react";

const info = ({ title, value }) => {
  return (
    <p>
      <span className="badge bg-danger me-3 px-3">{title}:</span>
      <span className="fw-bold">{value}</span>
    </p>
  );
};

export default info;
