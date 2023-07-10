// import './index.css'
import logo from "./../../images/logo192.png";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img className="logo" src={logo} alt="React_Logo" />
      <h2 className="title">ReactFacts</h2>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
