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

//Destructuring
// export default function Cards({
//   img,
//   title,
//   location,
//   price,
//   rating,
//   reviewCount,
// }) {
//   // console.log(props);
//   return (
//     <div className="card">
//       <img src={img} alt="card image" className="image" />
//       <div className="card-details">
//         <div className="airbnbinfo">
//           <img src={star} alt={star} className="star" />
//           <span className="">{rating} </span>
//           <span className="reviewCount gray">({reviewCount})</span>
//           <span className="location gray"> . {location}</span>
//         </div>
//         <p className="card-title">{title}</p>
//         <span className="bold">From ${price} / person</span>
//       </div>
//     </div>
//   );
// }
