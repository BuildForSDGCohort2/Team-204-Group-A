import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <p className="card__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          voluptas consequatur est accusamus excepturi velit id beatae commodi
          culpa libero optio autem perspiciatis, consequuntur sed ea maxime
          earum iure esse.
        </p>
      </div>
      <div className="card__cta">
        <button className="card__button">Make An Appointment</button>
      </div>
    </div>
  );
}
