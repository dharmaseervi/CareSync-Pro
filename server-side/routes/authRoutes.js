import express from 'express';
const router = express.Router();
import { register, login, updateProfile, } from '../controllers/ authController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { appointmentForm, getAppointments } from '../controllers/appointmentFormController.js';
import sessionManagement from '../controllers/sessionController.js';
import logoutSession from '../controllers/LogoutController.js';
import { getUserData } from '../controllers/userInfo.js';

router.post('/register', register);
router.post('/login', login);

router.post('/appointmentForm', appointmentForm)
router.get('/appointmentForm', getAppointments)
router.get('/validatesession', sessionManagement)
router.post('/logout', logoutSession)
router.get('/userdata', getUserData)
router.put('/update-profile/:userId', updateProfile);


// Example protected route
router.get('/protected', authenticate, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

export default router;
