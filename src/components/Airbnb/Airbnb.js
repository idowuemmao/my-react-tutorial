import "./Airbnb.css";
import AirbnbLogo from "./../../images/airbnb.png";
import AirbnbPic from "./../../images/800px-Colosseum_in_Rome,_Italy_-_April_2007.jpg";

export default function Airbnb() {
  return (
    <div className="body">
      <nav className="navbar">
        <img src={AirbnbLogo} alt="Airbnb Logo" className="logo" />
        <h3>airbnb</h3>
      </nav>
      <img src={AirbnbPic} alt="Airbnb" className="airbnbpic" />
      <h1 className="title">Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      <div>
        
      </div>
    </div>
  );
}
