import React, { useEffect, useState } from 'react'
import loginImg from '../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/esm/Spinner';




const Login = (props) => {
    const [windowWidth, setWindowWidth] = useState((window.innerWidth));
    useEffect(() => {
        const changeWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth);

    }, [])



    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    console.log(error);

    const handleLogin = async () => {
        const checkLoggedIn = () => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                console.log(storedToken);
                setTimeout(() => {
                    props.setLogin(true)
                    navigate('/');
                }, 1000);
            }
        };

        try {
            setLoading(true)
            let apiBaseUrl;

            // Check if the app is running in development (localhost) or production (Render)
            if (process.env.NODE_ENV === 'development') {
                apiBaseUrl = 'http://localhost:5050';
                console.log('local');  // Your local server URL
            } else {
                apiBaseUrl = 'https://caresync-pro.onrender.com'; 
                console.log("render"); // Your Render domain
            }
            const response = await fetch(`${apiBaseUrl}/auth/login`, {
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
                console.log(data);
                props.setUserLoginInfo(data.userSession);
                checkLoggedIn();
            } else if (response.status === 401) {

                console.log('Wrong password');
                setError('Wrong Password')
            } else {
                console.log('Unexpected error:', response.status);
                setError('User not found')
            }
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (

        <div className='d-flex justify-content-center'>
            <div className='res-login d-flex justify-content-center  align-items-center m-3' style={{ height: '80vh', width: "80%" }}>
                {(windowWidth > 800) && <div className='res-login-img d-flex border  justify-content-center  flex-column align-items-center gap-2 ' style={{ width: '60%', height: '60vh', }}>
                    <img style={{ width: '100%', height: '60vh' }} src={loginImg} alt="" />
                </div>}
                <div className='res-login-form d-flex border justify-content-center flex-column align-items-center gap-2 bg-secondary bg-opacity-25' style={{ width: '40%', height: '60vh' }}>
                    <form className='w-100 d-flex flex-column align-items-center ' >
                        <div className='  d-flex flex-column gap-1 m-1' style={{ width: "80%" }}>
                            <label htmlFor="Email">Email</label>
                            <input className={`rounded border border-${error === 'User not found' ? 'danger' : 'black'} p-2 bg-transparent`} type="email" name="email" value={user.email} onChange={handleChange} id="email" placeholder='Enter your email id' required />
                        </div>
                        <div className='d-flex flex-column gap-1 m-1' style={{ width: "80%" }}>
                            <label htmlFor="Password">Password</label>
                            <input className={`rounded border border-${error === 'Wrong Password' ? 'danger' : 'black'} p-2 bg-transparent`} type="password" name="password" value={user.password} onChange={handleChange} id="password" placeholder='Enter your password' required />
                        </div>
                        <div className='d-flex flex-column gap-1 text-danger m-1' style={{ width: "80%" }}>
                            {error !== "" ? error : null}
                        </div>
                        <div className='d-flex justify-content-center align-items-center' style={{ width: "80%" }}>
                            <button className='d-flex justify-content-center align-items-center btn btn-danger mt-2 ' style={{ width: '100%', height: '50px' }} onClick={handleLogin} type="button"> {loading ? <Spinner animation="border" variant="light" /> :
                                "Login"}</button>
                        </div>
                    </form>
                    <p className='ps-1 mt-3' style={{ fontWeight: 500 }}>New User ? <span><Link to="/signup" style={{ textDecoration: "none", color: "green" }}>Register Here</Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default Login
