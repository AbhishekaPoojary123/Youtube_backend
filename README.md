# 🎥 YouTube Backend (MERN)

A backend application for a YouTube-like platform built using the **MERN stack**. This project provides REST APIs for user authentication, video management, comments, likes, playlists, subscriptions, and other core functionalities. The backend is built with **Node.js**, **Express.js**, and **MongoDB**, following a modular and scalable architecture. The project is inspired by a YouTube backend implementation for learning purposes. :contentReference[oaicite:0]{index=0}

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Multer
- Cloudinary
- Cookie Parser
- CORS
- dotenv

## Prerequisites

- Node.js (v16 or above)
- MongoDB
- npm or yarn

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/AbhishekaPoojary123/Youtube_backend.git
cd Youtube_backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Add the required environment variables.

Example:

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_token_secret

ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret

REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

CORS_ORIGIN=http://localhost:3000
```

### 4. Start the server

```bash
npm run dev
```

or

```bash
npm start
```

The server will start at:

```
http://localhost:8000
```

---

# Features

- User Registration
- User Login & Logout
- JWT Authentication
- Access & Refresh Tokens
- Profile Management
- Avatar & Cover Image Upload
- Video Upload
- Video CRUD Operations
- Subscription System
- Dashboard APIs
- Secure Password Hashing

---

# AI Tools Used

The following AI tools were used to assist during development:

- ChatGPT
    - Documentation improvements
    - Project explanation
    - Code organization suggestions

---

# Where AI Helped

AI assistance was used for:

- Creating a structured README
- Improving project documentation
- Organizing setup instructions
- Writing implementation notes
- Suggesting documentation improvements

---

# Implementation Details

The following parts were implemented manually:

- Complete backend project setup
- Express server configuration
- MongoDB database integration
- REST API development
- Authentication using JWT
- Password encryption with Bcrypt
- Middleware implementation
- Cloudinary integration
- Multer configuration
- Route handling
- Error handling
- Environment configuration
- API testing

---

# Challenges Faced

During development, the following challenges were encountered:

- Configuring MongoDB connection
- Managing environment variables securely
- Implementing JWT authentication
- Handling file uploads with Multer
- Integrating Cloudinary for media storage
- Structuring backend folders for scalability
- Testing API endpoints efficiently

---

# Future Improvements

With more time, the following enhancements can be added:

- API documentation using Swagger
- Unit and integration testing
- Docker support
- Rate limiting
- Logging and monitoring
- Email verification
- Password reset functionality
- Notifications
- Better validation
- CI/CD pipeline
- Deployment guide
- Screenshots and API usage examples

---

# Folder Structure

```
src/
│── controllers/
│── models/
│── routes/
│── middlewares/
│── utils/
│── db/
│── constants/
│── app.js
│── index.js
```

---

# API Testing

The APIs can be tested using:

- Postman

---

# Acknowledgements

This project was developed as part of learning backend development using Node.js, Express.js, and MongoDB. It follows modern backend development practices including JWT authentication, secure password hashing, modular architecture, and RESTful API design. :contentReference[oaicite:1]{index=1}
