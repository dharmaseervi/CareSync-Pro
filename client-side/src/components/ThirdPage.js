import axios from "axios";
import React from "react";
export default function ThirdPage(props) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        let apiBaseUrl = 'https://caresync-pro.onrender.com';
        // let apiBaseUrl = 'http://localhost:5050';
      const response = await axios.post(`${apiBaseUrl}/auth/appointmentForm`, props.appointmentData);

      if (response.status === 200) {
        const data = response.data;
        console.log('Booking successful:', data);
        props.setCurrentPage('success')
        setTimeout(() => {
          props.setLoading(true)
        }, 2000);
      } else {
        console.error('bookign failed:', response.data.message);
      }

    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };
  return (

    <div>
      <form
        onSubmit={handleSubmit}
        name="form"
        className="d-flex flex-column align-items-center justify-content-center p-3 w-100"
      >
        <h3 className="mb-4">Confirm Details</h3>
        <div className="w-100 d-flex mb-2">
          <div className="d-flex flex-column me-1">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              id="date"
              className="p-1"
              value={props.appointmentData.selectedDate}
              readOnly
            />
          </div>
          <div className="d-flex flex-column ms-1">
            <label htmlFor="time">Time</label>
            <input
              type="text"
              id="time"
              className="p-1"
              value={props.appointmentData.selectedTime}
              readOnly
            />
          </div>
        </div>
        <div className="w-100 d-flex">
          <div className="d-flex flex-column me-1">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              className="p-1"
              value={props.appointmentData.firstName}
              readOnly
            />
          </div>
          <div className="d-flex flex-column ms-1">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              className="p-1"
              value={props.appointmentData.lastName}
              readOnly
            />
          </div>
        </div>
        <div className="w-100 d-flex flex-column mt-2">
          <label htmlFor="phonenumber">Contact Number</label>
          <input
            type="tel"
            id="phonenumber"
            className="p-1"
            placeholder="+91"
            value={props.appointmentData.mobileNo}
            readOnly
          />
        </div>
        <div className="w-100 d-flex flex-column m-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            className="p-1"
            value={props.appointmentData.address}
            readOnly
          />
        </div>
        <div className="w-100 d-flex">
          <div className="d-flex flex-column me-1">
            <label htmlFor="address">City</label>
            <input
              type="text"
              id="city"
              className="p-1"
              value={props.appointmentData.city}
              readOnly
            />
          </div>
          <div className="d-flex flex-column ms-1">
            <label htmlFor="city">State</label>
            <input
              type="text"
              id="state"
              className="p-1"
              value={props.appointmentData.state}
              readOnly
            />
          </div>
        </div>
        <div className="w-100 d-flex flex-column m-2">
          <label htmlFor="appointmentfor">Appointment For</label>
          <input
            type="text"
            id="appointmentfor"
            className="p-1"
            value={props.appointmentData.appointmentFor}
            readOnly
          />
        </div>
        <div className="m-2 d-flex justify-content-between w-100">
          <button
            type="button"
            className="btn btn-outline-dark"
            htmlFor="slotform"
            onClick={() => {
              props.setCurrentPage("secondpage");
            }}
          >
            Prev
          </button>
          <button type="submit" className="btn btn-outline-dark" htmlFor="form">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}