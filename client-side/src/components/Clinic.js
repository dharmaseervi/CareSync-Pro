import React from 'react'
const Clinic = () => {
    const phoneNumber = '9604132323';
    const clinicAddress = "Manik Dalvi's Clinic, Kalyan Naka, RK Business Centre, Opp. Bopal Nagar, Maharashtra, 421302";
    return (
        <div className='res-clinic d-flex justify-content-between p-3 ps-0  align-items-center pt-5' >
            <div className='d-flex flex-column gap-3' style={{ width: '60vw' }}>
                <div className='m-2'><iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.6485280631437!2d73.0626656!3d19.297644899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd3e981a6dc7%3A0xe160d1b4f91b76af!2sDr.%20Manik%20Dalvi!5e0!3m2!1sen!2sin!4v1702643789840!5m2!1sen!2sin" style={{ width: "100%", height: "50vh", border: '0' }} allow="fullscreen" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                <div className='d-flex gap-3 justify-content-center '>
                    <button className='btn btn-outline-dark p-2 w-25'>  <a  href={`tel:${phoneNumber}`} style={{ textDecoration: 'none', color: 'inherit' }}>contact us</a></button>
                    <button className='btn btn-outline-dark p-2 w-25'> <a href={`https://www.google.com/maps/place/${encodeURIComponent(clinicAddress)}`}  target="_blank" rel="noopener noreferrer">
                        Direction
                    </a></button>
                </div>
            </div>
            <div className='res-div' style={{ borderLeft: '1px solid black', height: '500px', }}></div>
            <div className='d-flex flex-column p-2 gap-2  ' style={{ width: '40vw', height: '60vh' }}>
                <h4>OPD Hours</h4>
                <div style={{ borderBottom: '1px solid black', }}></div>
                <div className='d-flex justify-content-between'>
                    <p>Monday</p>
                    <p>10:00 AM-12:00 PM</p>
                </div>
                <div style={{ borderBottom: '1px solid black', }}></div>
                <div className='d-flex justify-content-between'>
                    <p>Tuesday</p>
                    <p>10:00 AM-12:00 PM</p>
                </div>
                <div style={{ borderBottom: '1px solid black', }}></div>
                <div className='d-flex justify-content-between'>
                    <p>Wednesday</p>
                    <p>10:00 AM-12:00 PM</p>
                </div>
                <div style={{ borderBottom: '1px solid black', }}></div>
                <div className='d-flex justify-content-between'>
                    <p>Thursday</p>
                    <p>10:00 AM-12:00 PM</p>
                </div>
                <div style={{ borderBottom: '1px solid black', }}></div>
                <div className='d-flex justify-content-between'>
                    <p>Friday</p>
                    <p>10:00 AM-12:00 PM</p>
                </div>
                <div style={{ borderBottom: '1px solid black', }}></div>
                <div className='d-flex justify-content-between'>
                    <p>Saturday</p>
                    <p>10:00 AM-12:00 PM</p>
                </div>
                <div style={{ borderBottom: '1px solid black', }}></div>
                <div className='d-flex justify-content-between'>
                    <p>Sunday</p>
                    <p>10:00 AM-12:00 PM</p>
                </div>
                <div style={{ borderBottom: '1px solid black', }}></div>

            </div>
        </div >
    )
}

export default Clinic
