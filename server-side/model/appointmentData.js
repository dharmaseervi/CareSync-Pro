import mongoose from "mongoose";
const appointmentData = new mongoose.Schema({
    selectedDate: {
        type: String,
        require: true
    },
    selectedTime: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobileNo: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    appointmentFor: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    }
})
export default mongoose.model('appointmentDetails', appointmentData)