import React, { useState } from 'react'
import loginImg from '../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'




const Login = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFormData) => ({ ...prevFormData, [name]: value }));

    }
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async () => {
        const checkLoggedIn = () => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                console.log(storedToken);
                setSuccessMessage('Login successful!');
                props.setLogin(true)
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        };

        try {
            const response = await fetch('http://localhost:5050/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                credentials: 'include', // Enable sending credentials (cookies)
                body: JSON.stringify(user),
            });

            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem('authToken', data.token);
                console.log(data.userSession)
               // props.setUserLoginInfo(data.userSession);
                checkLoggedIn();
            } else if (response.status === 401) {
                const errorData = await response.json();
                console.log('Wrong password');
                console.log('Error message:', errorData.error);
            } else {
                console.log('Unexpected error:', response.status);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className='d-flex justify-content-center  align-items-center m-3' style={{ height: '80vh', width: "80%" }}>
                <div className='d-flex border  justify-content-center  flex-column align-items-center gap-2 ' style={{ width: '60%', height: '60vh', background: 'orange' }}>
                    <img style={{ width: '100%', height: '60vh' }} src={loginImg} alt="" />
                </div>
                <div className='d-flex border justify-content-center flex-column align-items-center gap-2 bg-secondary bg-opacity-25' style={{ width: '40%', height: '60vh' }}>
                    <form className='w-100 d-flex flex-column align-items-center' >
                        <div className='d-flex flex-column gap-1' style={{ width: "80%" }}>
                            <label htmlFor="Email">Email</label>
                            <input className='rounded border border-black p-2 bg-transparent' type="email" name="email" value={user.email} onChange={handleChange} id="email" placeholder='Enter your email id' required />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: "80%" }}>
                            <label htmlFor="Password">Password</label>
                            <input className="rounded border border-black p-2 bg-transparent" type="password" name="password" value={user.password} onChange={handleChange} id="password" placeholder='Enter your password' required />
                        </div>
                        <div className='d-flex justify-content-center align-items-center' style={{ width: "80%" }}>
                            <button className='btn btn-danger mt-2 ' style={{ width: '100%' }} onClick={handleLogin} type="button">Login</button>
                        </div>
                    </form>
                    <p className='ps-1 mt-3' style={{ fontWeight: 500 }}>New User ? <span><Link to="/signup" style={{ textDecoration: "none", color: "green" }}>Register Here</Link></span></p>
                    {successMessage && <p>{successMessage}</p>}

                </div>
            </div>
        </div>
    )
}

export default Login
