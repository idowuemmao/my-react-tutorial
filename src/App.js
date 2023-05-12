// import Navbar from './components/ReactFacts/Navbar'
// import Body from './components/ReactFacts/Body'
// import Buscard from './components/Buscard/Buscard'
// import Airbnb from "./components/Airbnb/Airbnb";
// import Jokes from "./components/Jokes/Jokes";
// import JokeData from "./components/Jokes/JokeData";

import Things from "./components/Things/Things";

export default function Mypage() {
  // const jokeElement = JokeData.map((joke) => {
  //   return (
  //     <Jokes key={joke.id} setup={joke.setup} punchline={joke.punchline} />
  //   );
  // });

  return (
    <div>
      {/* <Navbar/> */}
      {/* <Body/> */}
      {/* <Buscard/> */}
      {/* <Airbnb /> */}
      {/* {jokeElement} */}
      <Things />
    </div>
  );
}
