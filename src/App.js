// import Navbar from './components/ReactFacts/Navbar'
// import Body from './components/ReactFacts/Body'
// import Buscard from './components/Buscard/Buscard'
// import Airbnb from "./components/Airbnb/Airbnb"
import Jokes from "./components/Jokes/Jokes";

export default function Mypage() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Body/> */}
      {/* <Buscard/> */}
      {/* <Airbnb/> */}
      <Jokes
        setup="I know who I am"
        punchline="God's grace found me and i enjoyed it now"
      />
      <Jokes
        setup="You know who You are"
        punchline="God's grace found you and you enjoyed it now"
      />
      <Jokes
        // setup="You know who You are"
        punchline="God's grace found you and you enjoyed it now"
      />
    </div>
  );
}
