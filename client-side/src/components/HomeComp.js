import React from 'react'
import profileImg from '../assets/female_doctor.webp'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
const HomeComp = (props) => {
    return (

        <div className='res-home container d-flex justify-content-evenly align-items-center  m-5'>
            <div className='profile p-3 d-flex justify-content-center align-items-center flex-column '>
                <img src={profileImg} style={{ width: '30%', height: '30%', borderRadius: '50%', border: '5px solid green', }} className='res-img' alt="" />
                <div className='d-flex m-0 flex-column justify-content-center align-items-center '>
                    <h1>
                        Dr. Manik Dalvi
                    </h1>
                    <p>
                        Obstetrics & Gynecology
                    </p>
                    <p>
                        MBBS,MS
                    </p>
                </div>
                <div>
                    <button className='btn btn-primary'>
                        {props.login ? <Link to={'/booking'} style={{ textDecoration: 'none', color: 'white' }}>book appointment</Link>
                            : <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>book appointment</Link>
                        }
                    </button>
                </div>
            </div>

            <div className='res-visitingcard  p-3 d-flex justify-content-center align-items-center flex-column gap-3 bg-opacity-50 ' style={{ width: '40vw', height: '60vh' }}>
                <div className='d-flex justify-content-center'>
                    <h5>
                        Book a Clinic Appointment
                    </h5>
                </div>

                {/* div  */}
                <div className='booking'>
                    <p>
                        <AccessTimeIcon sx={{ color: 'black', }} /> Next Available at 10:00 AM,Tomorrow
                    </p>
                    <p>
                        <LocationOnIcon sx={{ color: 'black' }} /> Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302
                    </p>
                    <p className='borderBtm'>
                    </p>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <p className='text-danger'>Book Clinic Visit
                        </p>
                        <p className='text-danger'>No Booking Fee</p>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default HomeComp
