import airbnbdata from "./airbnbdata";

export default function Cards() {
  const cardElement = airbnbdata.map((card) => {
    return (
      <Cards key={card.id} img={card.coverImg} rating={card.stats.rating} />
    );
  });
  return <div>{cardElement}</div>;
}
