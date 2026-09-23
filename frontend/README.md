# AUTHORA

### Secure Access. Simple Experience.

AUTHORA is a full-stack authentication system built using the MERN stack. It provides secure user registration, login, JWT-based authentication, protected routes, and logout functionality.

---

## 🚀 Features

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Dashboard
- Authentication Middleware
- Duplicate Email Detection
- Invalid Credential Handling
- Token-based Session Management
- Logout Functionality
- Responsive UI
- MongoDB Database Integration
- REST API
- Postman API Testing

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- CORS
- dotenv

### Tools
- VS Code
- Postman
- MongoDB Atlas
- Git & GitHub

---

## 📁 Project Structure

```text
AUTHORA/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md

⚙️ Backend Setup
cd backend
npm install
npm run dev
Create a .env file inside the backend folder:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
💻 Frontend Setup
Open another terminal:
cd frontend
npm install
npm run dev
Frontend runs on:
http://localhost:5173
Backend runs on:
http://localhost:5000
🔐 Authentication Flow
1. User creates an account.
2. Password is hashed using bcrypt.
3. User data is stored in MongoDB.
4. Login verifies the email and password.
5. Server generates a JWT token.
6. Token is stored on the client.
7. Protected requests use the JWT token.
8. Authentication middleware verifies the token.
9. Logout removes the stored authentication token.
🔗 API Endpoints
Register
POST /api/auth/register
Request:
{
  "username": "username",
  "email": "user@example.com",
  "password": "password"
}
Login
POST /api/auth/login
Request:
{
  "email": "user@example.com",
  "password": "password"
}
Get Current User
GET /api/auth/me
Header:
Authorization: Bearer <JWT_TOKEN>
Logout
POST /api/auth/logout
🛡️ Security
- Passwords are never stored in plain text.
- Passwords are hashed using bcrypt.
- JWT is used for authentication.
- Protected routes require a valid JWT.
- MongoDB credentials are stored in environment variables.
- .env is excluded from Git using .gitignore.
🧪 API Testing
The authentication API was tested using Postman for:
- Successful registration
- Duplicate email registration
- Successful login
- Incorrect password
- Protected route with valid token
- Protected route without token
- Logout
👨‍💻 Author
Aditya Kumar Karan
B.Tech Computer Science & Engineering
📌 Project
AUTHORA — Secure Access. Simple Experience.
Full-Stack Development Internship Project