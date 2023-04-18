import "./Airbnb.css";
import star from "./../../images/Star 1-1.png";

export default function Cards(props) {
  // console.log(props);
  return (
    <div className="card">
      <img src={props.img} alt="card image" className="image" />
      <div className="card-details">
        <div className="airbnbinfo">
          <img src={star} alt={star} className="star" />
          <span className="">{props.rating} </span>
          <span className="reviewCount gray">({props.reviewCount})</span>
          <span className="location gray"> . {props.location}</span>
        </div>
        <p className="card-title">{props.title}</p>
        <span className="bold">From ${props.price} / person</span>
      </div>
    </div>
  );
}
