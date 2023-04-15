import AirbnbLogo from "./../../images/airbnb.png";
import "./Airbnb.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={AirbnbLogo} alt="Airbnb Logo" className="logo" />
      <h3>airbnb</h3>
    </nav>
  );
}
