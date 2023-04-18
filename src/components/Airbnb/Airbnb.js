import "./Airbnb.css";
import Navbar from "./Navbar";
import Body from "./Body";
import Cards from "./Card";
import airbnbdata from "./airbnbdata";

export default function Airbnb() {
  // const names = ["air", "wind", "weather", "clouds", "water"];
  // const uppercase = names.map((name) => {
  //   return name[0].toUpperCase() + name.slice(1);
  // });
  // console.log(uppercase);
  // const htmlTag = names.map((name) => `<p>${name}</p>`);
  // console.log(htmlTag);

  const cardElement = airbnbdata.map((card) => {
    return (
      <Cards
        key={card.id}
        title={card.title}
        img={card.coverImg}
        location={card.location}
        price={card.price}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
      />
    );
  });
  return (
    <div className="body">
      <Navbar />
      <Body />
      <div className="card-contact">{cardElement}</div>
    </div>
  );
}
