import profilepic from './../../images/mary.jpg'
import './Buscard.css'

export default function Header(){
    return(
        <div className="header">
            <img src={profilepic} className="profilepic" alt="ProfilePic"/>
            <h2 className='name'>Laura Smith</h2>
            <p className='title'>Frontend Developer</p>
            <small>New York, USA</small>
            <div className='buttons'>
                <button className='contact email'>Email</button>
                <button className='contact linkedin'>LinkedIn</button>
            </div>
        </div>
    )
}