import "./Jokes.css";
import JokeData from "./JokeData";

export default function Jokes(props) {
  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {/* If setup exists then print it out else don't print anything */}
      {props.punchline && <p>Punchline: {props.punchline}</p>}
      <hr />
    </div>
  );
}
