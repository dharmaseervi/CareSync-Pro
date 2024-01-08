import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config.js';

export const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    console.log("token",token);
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized ' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is invalid' });
    }
};
