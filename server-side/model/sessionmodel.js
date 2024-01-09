import mongoose from "mongoose";
const UserSession = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    validfrom: {
        type: Number,
        require: true
    },
    validtill: {
        type: Number,
        require: true
    },
  
})

export default mongoose.model('usersession', UserSession)


