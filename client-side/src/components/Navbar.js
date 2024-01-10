import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'
import profile from "../assets/female_doctor.webp"
import UserProfile from './UserProfile'
import Hamburger from 'hamburger-react'


const Navbar = (props) => {
    const [isOpen, setOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState((window.innerWidth));
    useEffect(() => {
        const changeWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <>
            <div className='nav-container'>
                <div className='logo-nav d-flex justify-content-center align-items-center gap-2 mt-1'>
                    <div>
                        <img src={profile} alt="" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '4px solid green' }} />
                    </div>
                    <div>
                        Dr. Manik Dalvi
                    </div>
                </div>
                {(isOpen || windowWidth > 800) &&
                    <div >
                        <ul className='nav-ul nav-menu'>
                            <li className='nav-item'>
                                <Link className='nav-hover' onClick={() => { setOpen(!setOpen) }} to="/">Home</Link>
                            </li>
                            <li>
                                <Link className='nav-hover' onClick={() => { setOpen(!setOpen) }} to="/treatment">Treatment</Link>
                            </li>
                            <li>
                                <Link className='nav-hover' onClick={() => { setOpen(!setOpen) }} to="/Blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link className='nav-hover' onClick={() => { setOpen(!setOpen) }} to="/about-me">About me</Link>
                            </li>
                            <li>
                                {!props.login ? <Link className='nav-hover' onClick={() => { setOpen(!setOpen) }} to="/login">Login</Link> : null}
                            </li>

                        </ul>
                    </div>}


                {props.login ?
                    <div className='resnavs-profile'>
                        <UserProfile setLogin={props.setLogin} firstLetter={props.firstLetter} />
                    </div> : null}
                <div className='menu-toggle' >
                    <Hamburger toggled={isOpen} size={35} toggle={setOpen} />
                </div>
            </div>



        </>
    )
}

export default Navbar
