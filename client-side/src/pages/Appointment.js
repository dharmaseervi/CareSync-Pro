import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Appointment = (props) => {

    const userid = props.userID.userID;
    console.log('userid for backend', userid);
    const [data, setData] = useState([]);
    const url = `http://localhost:5050/auth/appointmentForm?data=${encodeURIComponent(userid)}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [url]);

    console.log(data);
    return (
        <div className='d-flex justify-content-center align-items-center mx-auto flex-column mt-5'>
            <h1>appointment details</h1>
            {data.map((items, index) => (
                <div className='res-appointment d-flex   mx-auto p-4 gap-2 m-3 justify-content-between align-items-center' style={{ width: '98%', height: '100%' }}>
                    <table class="table ">
                        <thead class="thead-dark  table table-dark rounded ">
                            <tr  className='text-center' >
                                <th scope="col" className='p-3'>#</th>
                                <th scope="col" className='p-3'>First Name</th>
                                <th scope="col" className='p-3'>Last Name</th>
                                <th scope="col" className='p-3'>Mobile No</th>
                                <th scope="col" className='p-3'>Address</th>
                                <th scope="col" className='p-3'>State</th>
                                <th scope="col" className='p-3'>City</th>
                                <th scope="col" className='p-3'>Appointment For</th>
                                <th scope="col" className='p-3'>Date</th>
                                <th scope="col" className='p-3'>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-3'>{index}</td>
                                <td className='p-3'>{items.firstName}</td>
                                <td className='p-3'>{items.lastName}</td>
                                <td className='p-3'>{items.mobileNo}</td>
                                <td className='p-3'>{items.address}</td>
                                <td className='p-3'>{items.state}</td>
                                <td className='p-3'>{items.city}</td>
                                <td className='p-3'>{items.appointmentFor}</td>
                                <td className='p-3'>{items.selectedDate}</td>
                                <td className='p-3'>{items.selectedTime}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            ))}
        </div>
    )
}

export default Appointment
