import React from 'react'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import treatment from '../data/treatmentData';

const Footer = (props) => {
    const phoneNumber = '9604132323';
    const clinicAddress = "Manik Dalvi's Clinic, Kalyan Naka, RK Business Centre, Opp. Bopal Nagar, Maharashtra, 421302";

    return (
        <div className='res-footer d-flex justify-content-evenly gap-3 p-4' style={{ width: '100%', background: '#1098F7' }}>
            <div className='d-flex flex-column  '>
                <div className='d-flex flex-column'>
                    <div className='d-flex flex-column gap-4 '>
                        <h4 style={{ color: 'black' }}>
                            Contact Us
                        </h4>
                        <ul className='footer-ul '>
                            <li><div><LocalPhoneIcon /></div><div className='ps-2'>  <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                            </div></li>
                            <li><div><LocationOnIcon /></div><div className='ps-2' style={{ maxWidth: "300px" }}>    <a href={`https://www.google.com/maps/place/${encodeURIComponent(clinicAddress)}`} target="_blank" rel="noopener noreferrer">
                                {clinicAddress}
                            </a></div></li>
                        </ul>
                    </div>
                </div>
            </div >
            <div className='d-flex flex-column'>
                <div className='d-flex flex-column gap-4'>
                    <h4 style={{ color: 'black' }}>
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
                    <h4 style={{ color: 'black' }}>
                        Our Treatments
                    </h4>
                    <ul className='footer-ul'>
                        {treatment.map((varriant) => {
                            return <li key={varriant.title}>
                                <Link to="/treatment-details" onClick={() => { props.setTreat(varriant) }}>
                                    {varriant.title}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Footer
