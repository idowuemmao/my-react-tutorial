import AirbnbPic from "./../../images/Group77.png";
import "./Airbnb.css";

export default function Body() {
  return (
    <main className="airbnbbody">
      <img src={AirbnbPic} alt="Airbnb" className="airbnbpic" />
      <h1 className="title">Online Experiences</h1>
      <p className="airbnbinfo">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </main>
  );
}
