import appointmentData from "../model/appointmentData.js";


export const appointmentForm = async (req, res) => {
    const userId = req.query.userID;
    console.log('heyyyyyyy', userId);
    try {
        const { firstName, lastName, email, mobileNo, address, city, state, appointmentFor, selectedDate, selectedTime, userId } = req.body;
        const data = new appointmentData({ firstName, lastName, email, mobileNo, address, city, state, appointmentFor, selectedDate, selectedTime, userId });
        await data.save();
        res.status(200).json({ message: 'Appointment Booking successfully', data });
        console.log("success");
    } catch (error) {
        res.status(500).json({ message: 'appoinment bookig not successfully' });
        console.log('not success');
    }
}

export const getAppointments = async (req, res) => {
    const dataFromFrontend = req.query.data;
    console.log('user id from clientside', dataFromFrontend);
    try {
        const getdata = await appointmentData.find({ userId: dataFromFrontend });
        res.status(200).json(getdata);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
