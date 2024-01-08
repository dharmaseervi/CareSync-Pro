import React from 'react'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
    return (
        <div className='d-flex justify-content-evenly gap-3 p-2' style={{ width: '100%', height: "40vh", background: '#1098F7' }}>
            <div className='d-flex flex-column w-25 gap-2 '>
                <div className='d-flex flex-column gap-4'>
                    <h4 style={{ color: '#fff' }}>
                        Contact Us
                    </h4>
                    <ul className='footer-ul'>
                        <li><div><LocalPhoneIcon /></div><div> 9604132323</div></li>
                        <li><div><LocationOnIcon /></div><div> Manik Dalvi's Clinic, Kalyan Naka,Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302</div></li>
                    </ul>
                </div>
            </div >
            <div className='d-flex flex-column'>
                <div className='d-flex flex-column gap-4'>
                    <h4 style={{ color: '#fff' }}>
                        Quick link
                    </h4>
                    <ul className='footer-ul'>
                        <li >
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/treatment">Treatment</Link>
                        </li>
                        <li>
                            <Link to="/Blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/about-me">About me</Link>
                        </li>

                    </ul>
                </div>
            </div>
            <div className='d-flex  flex-column'>
                <div className='d-flex flex-column gap-4'>
                    <h4 style={{ color: '#fff' }}>
                        Our Treatments
                    </h4>
                    <ul className='footer-ul'>
                        <li>
                            Adolescent Health
                        </li>
                        <li>
                            Normal Delivery
                        </li>
                        <li>
                            Health Check-up
                        </li>
                        <li>
                            Laparoscopy
                        </li>
                        <li>
                            Vaccination And Check-up
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
