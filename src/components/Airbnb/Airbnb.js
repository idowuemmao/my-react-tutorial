import "./Airbnb.css";
import AirbnbLogo from "./../../images/airbnb.png";
import AirbnbPic from "./../../images/Group77.png";
import image1 from "./../../images/image12.png";
import star from "./../../images/Redstar.png";

export default function Airbnb() {
  const stars = <img src={star} alt="star" className="star" />;
  return (
    <div className="body">
      <nav className="navbar">
        <img src={AirbnbLogo} alt="Airbnb Logo" className="logo" />
        <h3>airbnb</h3>
      </nav>
      <img src={AirbnbPic} alt="Airbnb" className="airbnbpic" />
      <h1 className="title">Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
      <div>
        <img src={image1} alt="image1" className="image" />
        <p>
          {stars} 5.0 <span>(4) . USA</span>
        </p>
      </div>
    </div>
  );
}
