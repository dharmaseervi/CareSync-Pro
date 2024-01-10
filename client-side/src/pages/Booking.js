import React, { useEffect, useState } from "react";
import FirstPage from "../components/FirstPage";
import SecondPage from "../components/SecondPage";
import ThirdPage from "../components/ThirdPage";
import SuccessPage from "../components/Successful";

export default function Form(props) {
    const fetchSession = async () => {
        try {
            let apiBaseUrl = 'https://caresync-pro.onrender.com';
            // let apiBaseUrl = 'http://localhost:5050';
            const response = await fetch(`${apiBaseUrl}/auth/validatesession`, {
                credentials: "include",
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
            if (response.status === 200) {
                console.log("Success: Session is valid");
            } else {
                console.log("Unauthorized: Session is invalid");
                window.location.href = "/login"
            }
        } catch (error) {
            console.error("Error during session validation:", error.message);
        }
    };

    fetchSession();
    useEffect(() => {
        // If userID is available in props, update appointmentData
        if (props.userID.userID) {
            setAppointmentData({
                userId: props.userID.userID
            });
        }
    }, [props.userID.userID]);
    const [nextDates, setNextDates] = useState(5);
    const [appointmentData, setAppointmentData] = useState({
        userId: props.userID.userID
    });

    const [currentPage, setCurrentPage] = useState("firstpage");
    const [loading, setLoading] = useState(false);


    return (
        <div
            className="res-bookings d-flex flex-column  mx-auto  mt-5 justify-content-center align-items-center bg-light bg-opacity-25 p-3  border border-dark  m-3 "
            style={{ height: "100%", width: '98%', borderRadius: "10px" }}
        >
            <h2 className="mt-2">Appointment Booking</h2>
            {currentPage === "firstpage" ? (
                <FirstPage
                    setCurrentPage={setCurrentPage}
                    setAppointmentData={setAppointmentData}
                    appointmentData={appointmentData}
                    nextDates={nextDates}
                    setNextDates={setNextDates}
                />
            ) : null}
            {currentPage === "secondpage" ? (
                <SecondPage
                    setCurrentPage={setCurrentPage}
                    setAppointmentData={setAppointmentData}
                    appointmentData={appointmentData}
                />
            ) : null}
            {currentPage === "thirdpage" ? (
                <ThirdPage
                    setCurrentPage={setCurrentPage}
                    setAppointmentData={setAppointmentData}
                    appointmentData={appointmentData}
                    setLoading={setLoading}
                />
            ) : null}
            {currentPage === "success" ? <SuccessPage loading={loading} /> : null}
        </div>
    );
}