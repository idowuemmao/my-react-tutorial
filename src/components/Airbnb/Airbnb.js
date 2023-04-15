import "./Airbnb.css";
import AirbnbLogo from "./../../images/airbnb.png";
import image1 from "./../../images/image12.png";
import AirbnbPic from "./../../images/Group77.png";
import Cards from "./Cards";
import airbnbdata from "./airbnbdata";

export default function Airbnb() {
  const names = ["air", "wind", "weather", "clouds", "water"];
  // const uppercase = names.map((name) => {
  //   return name[0].toUpperCase() + name.slice(1);
  // });
  // console.log(uppercase);
  const htmlTag = names.map((name) => `<p>${name}</p>`);
  console.log(htmlTag);

  return (
    <div className="body">
      <nav className="navbar">
        <img src={AirbnbLogo} alt="Airbnb Logo" className="logo" />
        <h3>airbnb</h3>
      </nav>
      <main className="airbnbbody">
        <img src={AirbnbPic} alt="Airbnb" className="airbnbpic" />
        <h1 className="title">Online Experiences</h1>
        <p className="airbnbinfo">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </main>

      <div className="card-contact">
        <Cards
          img={image1}
          rating="5.0"
          country="Canada"
          message="Life lessons with K"
          price="136"
        />
        <Cards
          img={image1}
          rating="6.0"
          country="USA"
          message="Home lessons with K"
          price="145"
        />
        <Cards
          img={image1}
          rating="6.0"
          country="USA"
          message="Home lessons with K"
          price="145"
        />
      </div>
    </div>
  );
}
