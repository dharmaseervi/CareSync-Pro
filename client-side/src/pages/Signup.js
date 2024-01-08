import React, { useState } from 'react'
import loginImg from '../assets/login.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Signup(props) {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFormData) => ({ ...prevFormData, [name]: value }));

    }


    const handleSignUp = async () => {
        try {
            const response = await fetch('http://localhost:5050/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.status === 201) {
                const data = await response.json();
                console.log('User registered successfully:', data);
                setSuccessMessage('Registration successful. Redirecting to login...');
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/login'); // Redirect to the login page or any desired route
                }, 2000);
            } else if (response.status === 401) {
                console.log('User already exists');

            } else {
                const errorData = await response.json();
                console.error('Error during registration:', errorData.message);

            }
        } catch (error) {
            console.error('Error during registration:', error.message);
        }

    };





    return (
        <div className='d-flex justify-content-center  align-items-center m-3 mx-auto ' style={{ height: '80vh', width: "80%" }}>
            <div className='d-flex border  justify-content-center  flex-column align-items-center gap-2 ' style={{ width: '50%', height: '70vh', background: 'orange' }}>
                <img style={{ width: '100%', height: '100%' }} src={loginImg} alt="" />
            </div>
            <div className='d-flex border justify-content-center flex-column align-items-center gap-2 bg-secondary bg-opacity-25' style={{ width: '50%', height: '70vh' }}>
                <form action="" className='d-flex justify-content-center align-items-center  flex-column w-100'>
                    <div className='d-flex flex-column gap-1' style={{ width: "80%" }}>
                        <label htmlFor="firstname">First Name</label>
                        <input className='rounded border border-black p-2 bg-transparent' type="text" name="firstName" value={user.firstName} onChange={handleChange} id="" placeholder='Enter your First Name' />
                    </div>
                    <div className='d-flex flex-column gap-1' style={{ width: "80%" }}>
                        <label htmlFor="lastname">Last Name</label>
                        <input className='rounded border border-black p-2 bg-transparent' type="text" name="lastName" id="" value={user.lastName} onChange={handleChange} placeholder='Enter your Last Name' />
                    </div>
                    <div className='d-flex flex-column gap-1' style={{ width: "80%" }}>
                        <label htmlFor="Email">Email</label>
                        <input className='rounded border border-black p-2 bg-transparent' type="email" name="email" id="" value={user.email} onChange={handleChange} placeholder='Enter your email id' />
                    </div>
                    <div className='d-flex flex-column gap-1' style={{ width: "80%" }}>
                        <label htmlFor="Password">Password</label>
                        <input className="rounded border border-black p-2 bg-transparent" type="password" name="password" id="" value={user.password} onChange={handleChange} placeholder='Enter your password' />
                    </div>
                    <div className='d-flex justify-content-center align-items-center' style={{ width: "80%" }}>
                        <button className='btn btn-danger mt-2 ' type='button' onClick={handleSignUp} style={{ width: '100%' }} >Sign Up</button>
                    </div>
                    <p className='ps-1 mt-3' style={{ fontWeight: 500 }}>Already have Acc ? <span><Link to="/login" style={{ textDecoration: "none", color: "green" }}>Login</Link></span></p>
                    {successMessage && <p>{successMessage}</p>}˛
                </form>
            </div>
        </div>
    )
}
