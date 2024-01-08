import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'
import profile from "../assets/female_doctor.webp"
import UserProfile from './UserProfile'

const Navbar = (props) => {
    return (

        <div className='nav-container'>
            <div className='d-flex justify-content-center align-items-center gap-2'>
                <div>
                    <img src={profile} alt="" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '4px solid green' }} />
                </div>
                <div>
                    Dr. Manik Dalvi
                </div>
            </div>
            <div className=''>
                <ul className='nav-ul'>
                    <li className='nav-item'>
                        <Link className='nav-hover' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='nav-hover' to="/treatment">Treatment</Link>
                    </li>
                    <li>
                        <Link className='nav-hover' to="/Blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link className='nav-hover' to="/about-me">About me</Link>
                    </li>
                    <li>
                        {!props.login ? <Link className='nav-hover' to="/login">Login</Link> : null}
                    </li>
                    {props.login ? <UserProfile setLogin={props.setLogin} /> : null}
                </ul>

            </div>

        </div>

    )
}

export default Navbar
