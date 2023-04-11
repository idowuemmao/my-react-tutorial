import image1 from "./../../images/image12.png";
import star from "./../../images/Star 1-1.png";
import "./Airbnb.css";

export default function Cards() {
  return (
    <div className="card">
      <img src={image1} alt="image1" className="image" />
      <div className="card-detail">
        <img src={star} alt="star" className="star" />
        <span className="rating">5.0</span>
        <span className="gray">(6) .</span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
