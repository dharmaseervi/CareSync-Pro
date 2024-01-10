import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from '../assets/login.png'

const AboutForHome = () => {
    return (
        <div className='res-about d-flex  p-4  justify-content-between align-items-center ' style={{ width: '100%' }}>
            <div className='d-flex flex-column gap-4 bg-dark bg-opacity-25 justify-content-center p-3 align-items-center ' style={{ width: '40vw', height: '70vh' }}>
                <div className='d-flex flex-column justify-content-center '>
                    <h1 className='text-center text-dark'>
                        About Me
                    </h1>
                    <p className='text-center ' style={{fontWeight:'600', fontSize:'1.2rem'}}>
                        Dr. Manik Dalvi is a renowned and experienced Obstetrics & Gynecology in Bhiwandi. She brings with her an experience of 12 years and has been associa...  <Link style={{ textDecoration: 'none' }} to={'/about-me'}> Read more</Link>
                    </p>
                    <button className='btn btn-outline-dark w-50  mx-auto '><Link style={{ textDecoration: 'none', color: 'black' }} to={'/booking'} >Book Appointment</Link></button>
                </div>
            </div>
            <div className='res-abt-home' style={{ width: '60vw' }}>
                <img src={AboutImg} alt="" style={{ width: '100%', height: '70vh' }} />
            </div>
        </div>
    )
}

export default AboutForHome
