import React from "react";

const Card = ({title, content}) => {
  return (
    <div className="card">
      <div className="card-header">
        {/* Header */}
        <h1>{title}</h1>
      </div>
      <div className="card-content">
        {/* Content */}
        {content}
      </div>
    </div>
  );
}

export default Card;
