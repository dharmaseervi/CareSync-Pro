import React from "react";
export default function FirstPage(props) {
    const currentDate = new Date();
    let times = [
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "01:00 PM",
        "01:30 PM",
        "02:00 PM",
        "02:30 PM",
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
    ];
    let dates = [];
    for (let i = 0; i < 30; i++) {
        dates.push(
            new Date(
                new Date().setDate(currentDate.getDate() + i)
            ).toLocaleDateString()
        );
    }
    function handleNext(event) {
        event.preventDefault();
        props.setCurrentPage("secondpage");
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100">
            <form
                name="slotform"
                className="d-flex flex-column align-items-center justify-content-center p-3 w-100"
                onSubmit={handleNext}
            >
                <h3 className="mb-4">Select Slot</h3>
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <button
                        className="btn btn-outline-dark"
                        style={{ width: "10%" }}
                        type="button"
                        onClick={() => {
                            props.setNextDates(props.nextDates - 5);
                        }}
                        disabled={props.nextDates === 5 ? true : false}
                    >
                        Prev
                    </button>
                    <fieldset
                        id="date"
                        className="d-flex justify-content-evenly"
                        onChange={(event) => {
                            props.setAppointmentData({
                                ...props.appointmentData,
                                selectedDate: event.target.value,
                            });
                        }}
                    >
                        {dates.slice(props.nextDates - 5, props.nextDates).map((date) => {
                            return (
                                <div key={date} className="m-2 ms-4 me-4">
                                    <input
                                        className="btn-check"
                                        type="radio"
                                        value={date}
                                        id={date}
                                        name="date"
                                        required
                                        defaultChecked={
                                            props.appointmentData.selectedDate === date
                                                ? true
                                                : false
                                        }
                                    />
                                    <label
                                        className="btn btn-outline-dark"
                                        htmlFor={date}
                                        style={{ fontWeight: 500 }}
                                    >
                                        {date}
                                    </label>
                                </div>
                            );
                        })}
                    </fieldset>
                    <button
                        className="btn btn-outline-dark"
                        style={{ width: "10%" }}
                        type="button"
                        onClick={() => {
                            props.setNextDates(props.nextDates + 5);
                        }}
                        disabled={props.nextDates === 30 ? true : false}
                    >
                        Next
                    </button>
                </div>
                <div className="m-2 w-75">
                    <fieldset
                        id="time"
                        className="d-flex flex-wrap justify-content-center"
                        onChange={(event) => {
                            props.setAppointmentData({
                                ...props.appointmentData,
                                selectedTime: event.target.value,
                            });
                        }}
                    >
                        {times.map((time) => {
                            return (
                                <div className="m-2 w-25" key={time}>
                                    <input
                                        className="btn-check"
                                        type="radio"
                                        value={time}
                                        id={time}
                                        name="time"
                                        required
                                        defaultChecked={
                                            props.appointmentData.selectedTime === time
                                                ? true
                                                : false
                                        }
                                    />
                                    <label
                                        className="btn btn-outline-dark w-100"
                                        htmlFor={time}
                                        style={{ fontWeight: 500 }}
                                    >
                                        {time}
                                    </label>
                                </div>
                            );
                        })}
                    </fieldset>
                </div>
                <button
                    type="submit"
                    className="btn btn-outline-dark"
                    htmlFor="slotform"
                >
                    Next
                </button>
            </form>
        </div>
    );
}