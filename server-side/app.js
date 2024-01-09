import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { port, mongoURI, sessionSecret, NODE_ENV } from './config.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import session from "express-session";
import { default as connectMongoDBSession } from 'connect-mongodb-session';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';





const MongoDBStore = connectMongoDBSession(session);

const store = new MongoDBStore({
    uri: mongoURI,
    collection: "sessions",
});
const app = express();
mongoose.set('strictQuery', true)
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("CONNECTION OK")
}).catch(err => {
    console.log("CONNECTION IS BAD")
    console.log(err)
});

app.use(bodyParser.json());
app.use(cookieParser('secret'));

// Routes
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(
    session({
        name: 'usersession',
        secret: sessionSecret,
        resave: false,
        saveUninitialized: true,
        store: store,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // Session duration in milliseconds (e.g., 1 day)
            httpOnly: true,
            secure: false, // Set to true in production if using HTTPS
        },
    })
);


store.on('error', (error) => {
    console.error('MongoDB session store error:', error);
});

app.use('/auth', authRoutes);



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, '../client-side/build')));

// Catch-all route to serve React app's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client-side/build/index.html'));
});
let apiBaseUrl;

// Check if the app is running in development (localhost) or production (Render)
if (NODE_ENV === 'development') {
    apiBaseUrl = 'http://localhost:5050';
    console.log("local");  // Your local server URL
} else {
    apiBaseUrl = 'https://caresync-pro.onrender.com';
    console.log("render");  // Your Render domain
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
