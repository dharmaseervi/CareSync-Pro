import User from '../model/register.js';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const checkUserEmail = await User.findOne({ email });
        if (!checkUserEmail) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = new User({ firstName, lastName, email, password: hashedPassword });
            await user.save();
            res.status(201).send({ message: 'User registered successfully' });
        } else {
            res.status(401).send({ message: 'User exits already' });
            console.log('exits');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                console.log('Wrong password');
                res.status(401).send({ message: 'Invalid Password' });
            } else {
                const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
                const userSession = { userID: user._id }
                // Set the user data in the session
                req.session.user = userSession;
                console.log(userSession)
                res.status(200).json({ token, userSession });
            }
        } else {
            console.log('User not found');
            res.status(500).send({ error: 'User not Found' });
        }

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

};
