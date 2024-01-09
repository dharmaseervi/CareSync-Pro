// Import necessary modules
import User from '../model/register.js';

// Define the getUserData function
export const getUserData = async (req, res) => {



    const dataFromFrontend = req.query.data;
    console.log('user id from clientside userInfo route', dataFromFrontend);
    try {
        const getdata = await User.findById(dataFromFrontend).select('firstName lastName email');
        // userData = { firstName: getdata.firstName, lastName: getdata.lastName, email: getdata.email }
        res.status(200).json(getdata);
        console.log('getdata', getdata);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }


};
