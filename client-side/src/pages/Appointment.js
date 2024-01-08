import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Appointment = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5050/auth/appointmentForm');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    console.log('hello', data);

    return (
        <div className='d-flex justify-content-center align-items-center mx-auto flex-column mt-5'>
            <h1>appointment details</h1>
            {data.map((items) => (
                <div className='d-flex border bg-black bg-opacity-10 p-4 gap-2 m-3 justify-content-between align-items-center' style={{ width: '98%', height: '20vh' }}>
                    <div className='border border-primary bg-info bg-opacity-50 rounded p-2 d-flex justify-content-around  align-items-center ' style={{ width: '160px', height: '100px' }}>{items.appointmentFor}</div>
                    <div className='border border-primary bg-info bg-opacity-50 rounded p-2 d-flex justify-content-around  align-items-center ' style={{ width: '160px', height: '100px' }}>{items.address}</div>
                    <div className='border border-primary bg-info bg-opacity-50 rounded p-2 d-flex justify-content-around  align-items-center ' style={{ width: '160px', height: '100px' }}>{items.firstName}</div>
                    <div className='border border-primary bg-info bg-opacity-50 rounded p-2 d-flex justify-content-around  align-items-center ' style={{ width: '160px', height: '100px' }}>{items.lastName}</div>
                    <div className='border border-primary bg-info bg-opacity-50 rounded p-2 d-flex justify-content-around  align-items-center ' style={{ width: '160px', height: '100px' }}>{items.selectedDate}</div>
                    <div className='border border-primary bg-info bg-opacity-50 rounded p-2 d-flex justify-content-around  align-items-center ' style={{ width: '160px', height: '100px' }}>{items.selectedTime}</div>
                    <div className='border border-primary bg-info bg-opacity-50 rounded p-2 d-flex justify-content-around  align-items-center ' style={{ width: '160px', height: '100px' }}>{items.city}</div>
                    <div className='border border-primary bg-info bg-opacity-50 rounded p-2 d-flex justify-content-around  align-items-center ' style={{ width: '160px', height: '100px' }}>{items.state}</div>
                    <div className='border border-primary bg-info bg-opacity-50 rounded p-2 d-flex justify-content-around  align-items-center ' style={{ width: '160px', height: '100px' }}>{items.mobileNo}</div>

                </div>
            ))}
        </div>
    )
}

export default Appointment
