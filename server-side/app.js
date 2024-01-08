import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { port, mongoURI, sessionSecret, } from './config.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import session from "express-session";
import { default as connectMongoDBSession } from 'connect-mongodb-session';


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
        resave: true,
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
