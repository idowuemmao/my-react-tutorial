// import React from "react";
import image1 from "./../../images/image12.png";
import star from "./../../images/Star 1-1.png";
import "./Airbnb.css";
// import airbnbdata from "./airbnbdata";

export default function Cards(props) {
  // console.log(props);
  return (
    <div className="card">
      <img src={props.img} alt="image1" className="image" />
      <div className="card-detail">
        <img src={star} alt="star" className="star" />
        <span className="rating">{props.rating}</span>
        <span className="gray">(6) .</span>
        <span className="gray">{props.country}</span>
      </div>
      <p className="gray">{props.message}</p>
      <p className="gray">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
