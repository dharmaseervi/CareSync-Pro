import React, { useEffect, useState } from 'react';
import profile from '../assets/female_doctor.webp';
import axios from 'axios';

const Profile = (props) => {
    const userid = props.userID.userID;
    console.log('userid for backend from profile', userid);

    const [data, setData] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState({});
    console.log(editedData);
 
    let apiBaseUrl = 'https://caresync-pro.onrender.com'
    const url = `${apiBaseUrl}/auth/userdata?data=${encodeURIComponent(userid)}`;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setData(data);
                setEditedData(data); // Initialize editedData with the fetched data
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [url]);

    const handleSaveClick = async () => {
        try {
            const response = await axios.put(`${apiBaseUrl}/auth/update-profile/${userid}`, editedData);
            setData(response.data);
            setEditMode(false);
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    const handleEditClick = () => {
        setEditMode(true);
    };


    const handleCancelClick = () => {
        // Reset editedData to match the current data
        setEditedData(data);
        setEditMode(false);
    };

    const handleInputChange = (e) => {
        // Update the editedData state as the user types into the input fields
        setEditedData({
            ...editedData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className=' d-flex justify-content-center align-items-center mx-auto  mt-5 '>
            <div className='res-profile d-flex  justify-content-center align-items-center bg-secondary bg-opacity-75 flex-column gap-2 rounded' style={{ width: '60%', height: '70vh' }}>
                <div >
                    <img src={profile} alt="" style={{ width: '8rem', borderRadius: '50%' }} />
                </div>

                <div className="d-flex flex-column" style={{ width: '95%' }}>
                    <label htmlFor="firstName">First Name</label>
                    {editMode ? (
                        <input
                            type="text"
                            id="firstName"
                            className="rounded border border-black p-2 bg-transparent text-capitalize "
                            name="firstName"
                            value={editedData.firstName}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <input
                            type="text"
                            id="firstName"
                            className="rounded border border-black p-2 bg-transparent text-capitalize"
                            value={data.firstName}
                            readOnly
                        />
                    )}
                </div>
                <div className="d-flex flex-column " style={{ width: '95%' }}>
                    <label htmlFor="lastName">Last Name</label>
                    {editMode ? (
                        <input
                            type="text"
                            id="lastName"
                            className="rounded border border-black p-2 bg-transparent text-capitalize "
                            name="lastName"
                            value={editedData.lastName}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <input
                            type="text"
                            id="lastName"
                            className="rounded border border-black p-2 bg-transparent text-capitalize"
                            value={data.lastName}
                            readOnly
                        />
                    )}
                </div>
                <div className="d-flex flex-column " style={{ width: '95%' }}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        className="rounded border border-black p-2 bg-transparent "
                        value={data.email}
                        readOnly
                    />
                </div>
                <div className=''>
                    {editMode ? (
                        <div className='d-flex gap-2' >
                            <button className='btn btn-primary ' style={{ width: '20vw', height: '6vh' }} onClick={handleSaveClick}>Save</button>
                            <button className='btn btn-danger  ' style={{ width: '20vw', height: '6vh' }} onClick={handleCancelClick}>Cancel</button>
                        </div>
                    ) : (
                        <button className='btn btn-secondary btn-block btn-lg p-2 ' style={{ width: '20vw', height: '6vh' }} type='button' onClick={handleEditClick}>Edit</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
