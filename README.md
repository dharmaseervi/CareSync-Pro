# CareSync-Pro

## Clinic Appointment Booking Website

Welcome to **CareSync-Pro**, a clinic appointment booking website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This repository contains the source code for the application.

✨ Features

User Authentication:
Secure login and logout functionality implemented.
Authentication managed through both session and JWT (JSON Web Token).

Appointment Booking:
Users can easily schedule appointments with healthcare providers.
Calendar integration for convenient date selection.

MERN Stack:
MongoDB: NoSQL database for storing user data and appointment information.
Express.js: Web application framework for Node.js.
React.js: Frontend library for building user interfaces.
Node.js: Server-side JavaScript runtime.


## 📁 Folder Structure

```plaintext
CareSync-Pro/
|-- server-side/
|   |-- models/
|   |   |-- userModel.js
|   |-- routes/
|   |   |-- authRoutes.js
|   |   |-- appointmentRoutes.js
|   |-- config/
|   |   |-- config.js
|   |-- controllers/
|   |   |-- authController.js
|   |   |-- appointmentController.js
|   |-- middleware/
|   |   |-- authMiddleware.js
|   |-- server.js
|-- client-side/
|   |-- public/
|   |   |-- index.html
|   |-- src/
|   |   |-- components/
|   |   |   |-- Auth/
|   |   |   |   |-- Login.js
|   |   |   |   |-- Logout.js
|   |   |   |-- Appointments/
|   |   |   |   |-- AppointmentForm.js
|   |   |   |   |-- AppointmentList.js
|   |   |-- App.js
|   |   |-- index.js
|   |-- package.json
|-- package.json
|-- README.md
|-- .env
|-- .gitignore
|-- LICENSE

🚀 Getting Started

Clone the Repository:
git clone https://github.com/dharmaseervi/CareSync-Pro.git
cd CareSync-Pro

Install Dependencies:
npm install
cd client
npm install

frontend:
cd client-side
npm start

backend:
cd server-side
nodemon app.js

📂 Project Structure

>> client: Frontend React application.
>> server: Backend Express.js server.
>> models: MongoDB schema models.
>> routes: API routes for authentication and appointment handling.
>> config: Configuration files, including JWT secret.

🤝 Contributing

If you would like to contribute to CareSync-Pro, please follow these steps:

1.Fork the repository.
2.Create a new branch for your feature or bug fix.
3.Make your changes and commit them with descriptive messages.
4.Push your changes to your fork.
5.Submit a pull request to the main repository.

❗ Issues and Bug Reports

If you encounter any issues or find a bug, please open an issue on the GitHub Issues page.

Copyright (c) 2024 dharmaseervi

website hosted link:
https://caresync-pro.onrender.com

