import './index.css'
import logo from './../../images/logo192.png'

export default function Navbar(){
        return (
            <nav className='nav'>
                <img className='logo' src={logo} alt="React_Logo"/>
                <h2 className='title'>ReactFacts</h2>
                <ul className='nav-list'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
        )
}