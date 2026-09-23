# AUTHORA

### Secure Access. Simple Experience.

AUTHORA is a full-stack authentication system built with the MERN stack. It provides secure user registration, login, JWT-based authentication, protected routes, password hashing, and logout functionality through a responsive modern interface.

---

## 🚀 Live Demo

### Frontend
https://authoraweb.vercel.app/

### Backend API
https://authorabackend.vercel.app/

### GitHub Repository
https://github.com/aadiikarn/AUTHORA

---

## ✨ Features

- 🔐 Secure user registration
- 🔑 User login and authentication
- 🔒 Password hashing using bcrypt
- 🎟️ JWT-based authentication
- 🛡️ Protected dashboard
- 👤 Authenticated user information
- 🚪 Logout functionality
- 📱 Fully responsive design
- ⚠️ Invalid credential handling
- 📧 Duplicate email detection
- 🗄️ MongoDB database integration
- 🔌 REST API
- 🧪 Postman API testing
- 🌐 Production deployment with Vercel

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
- JSON Web Token
- CORS
- dotenv

### Tools & Services

- VS Code
- Postman
- MongoDB Atlas
- Git
- GitHub
- Vercel

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │      React UI       │
                    │   Vite + CSS        │
                    └──────────┬──────────┘
                               │
                               │ Axios
                               ▼
                    ┌─────────────────────┐
                    │    Express REST API │
                    │      Node.js        │
                    └──────────┬──────────┘
                               │
                  ┌────────────┴────────────┐
                  │                         │
                  ▼                         ▼
          ┌───────────────┐        ┌────────────────┐
          │ JWT + bcrypt  │        │ MongoDB Atlas  │
          │ Authentication│        │    Database    │
          └───────────────┘        └────────────────┘


AUTHORA/
│
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── authRoutes.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── services/
│   │   │   └── authService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── vercel.json
│   ├── package.json
│   └── vite.config.js
│
├── API_DOCUMENTATION.md
└── README.md

Authentication Flow

User Registration
       ↓
Validate Input
       ↓
Hash Password using bcrypt
       ↓
Store User in MongoDB
       ↓
Generate JWT
       ↓
Store Token on Client
       ↓
Access Protected Dashboard
       ↓
JWT Verification
       ↓
Authenticated User

🔗 API Endpoints
Base URL:
https://authorabackend.vercel.app/api/auth


Method	Endpoint	Description	Authentication
POST	/register	Register a new user	No
POST	/login	Login user	No
GET	/me	Get current user	JWT Required
POST	/logout	Logout	No


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
Current User
GET /api/auth/me
Header:
Authorization: Bearer <JWT_TOKEN>
Logout
POST /api/auth/logout
For complete API details, see:
API_DOCUMENTATION.md
🛡️ Security
AUTHORA implements several authentication and security mechanisms:
- Passwords are hashed using bcryptjs.
- Plain-text passwords are never stored in the database.
- JWT tokens are used for authenticated requests.
- Protected routes verify JWT tokens through authentication middleware.
- Duplicate email registration is prevented.
- Invalid login credentials return an authentication error.
- MongoDB credentials are stored using environment variables.
- .env is excluded from Git using .gitignore.
Note: Logout clears the authentication token from the client. JWT itself is stateless, so server-side token revocation/blacklisting is not implemented in the current version.

⚙️ Local Installation
1. Clone Repository
git clone https://github.com/aadiikarn/AUTHORA.git
cd AUTHORA
2. Backend Setup
cd backend
npm install
Create a .env file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Start the backend:
npm run dev
Backend:
http://localhost:5000
3. Frontend Setup
Open another terminal:
cd frontend
npm install
Start the frontend:
npm run dev
Frontend:
http://localhost:5173
🧪 API Testing
The API was tested using Postman for:
- Successful user registration
- Duplicate email registration
- Successful login
- Invalid password
- Protected route with valid JWT
- Protected route without JWT
- Logout
- Invalid/expired authentication token
📱 Responsive Design
AUTHORA is designed to work across:
- 💻 Desktop
- 💻 Laptop
- 📱 Mobile
- 📱 Tablet
The authentication interface and dashboard automatically adapt to smaller screen sizes.
☁️ Deployment
Frontend
Deployed using:
Vercel
https://authoraweb.vercel.app/
Backend
Deployed using:
Vercel
https://authorabackend.vercel.app/
Database
Hosted using:
MongoDB Atlas
📚 Documentation
Detailed API documentation is available in:
API_DOCUMENTATION.md
👨‍💻 Author
Aditya Kumar Karan
B.Tech Computer Science & Engineering
Full-Stack Development Internship Project
📌 Project Information
Project: AUTHORA
Tagline: Secure Access. Simple Experience.
Type: Full-Stack Authentication System
Stack: MERN
Deployment: Vercel
