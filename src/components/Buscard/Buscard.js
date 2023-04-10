import profilepic from './../../images/mary.jpg'
import './Buscard.css'

export default function Buscard(){
    return(
        <div>
            <img src={profilepic} className="profilepic" alt="ProfilePic"/>
            <h1 className='name'>Laura Smith</h1>
            <p className='title'>Frontend Developer</p>
            <small>New York, USA</small>
            
        </div>
    )
}