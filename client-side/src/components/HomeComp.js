import React from 'react'
import profileImg from '../assets/female_doctor.webp'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
const HomeComp = (props) => {
    return (

        <div className='container d-flex justify-content-evenly align-items-center  m-5'>
            <div className=' profile p-3 d-flex justify-content-center align-items-center flex-column w-25 h-50 '>
                <img src={profileImg} style={{ width: '70%', height: '70%', border: '5px solid green' }} alt="" />
                <h1>
                    Dr. Manik Dalvi
                </h1>
                <p>
                    Obstetrics & Gynecology
                    MBBS,MS
                </p>
                <button className='btn btn-primary'>
                    {props.login ? <Link to={'/booking'} style={{ textDecoration: 'none', color: 'white' }}>book appointment</Link>
                        : <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>book appointment</Link>
                    }
                </button>
            </div>

            <div className='  p-3 d-flex justify-content-center align-items-center flex-column gap-3' style={{ maxWidth: '40vw', maxHeight: '60vh' }}>
                <div>
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
                        <h6 className='text-danger'>Book Clinic Visit
                        </h6>
                        <p className='text-danger'>No Booking Fee</p>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default HomeComp
