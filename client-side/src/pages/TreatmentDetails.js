import React from 'react'
import { Link } from 'react-router-dom'

const TreatmentDetails = (props) => {
   
    return (
        <div className='d-flex justify-content-center align-items-center m-4  p-2 gap-3' >
            <div style={{ width: 760 }} className='d-flex gap-4 flex-column align-items-center'>
                <div className='align-self-start '>
                    <h6 style={{ fontSize: '2rem' }}>{props.data.title}</h6>
                </div>
                <div>
                    <img className='treat-card' src={props.data.detail_page.image} style={{ width: '50vw', height: '50vh', borderRadius: '10px' }} alt='...'></img>
                </div>
                <div>
                    <p> {props.data.detail_page.details}</p>
                </div>
                <div className='align-self-start '>
                    <h4 >FIX YOUR APPOINTMENT NOW !!!</h4>
                </div>
                <div><button className='btn btn-outline-dark p-3'><Link style={{ textDecoration: 'none', color:'black' }} to={'/booking'} >Book Appointment</Link></button></div>
            </div>
        </div>
    )
}

export default TreatmentDetails
