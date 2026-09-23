# AUTHORA API Documentation

## Base URL

```text
http://localhost:5000/api/auth


1. Register User
Endpoint
POST /register
Description
Creates a new AUTHORA user account and securely hashes the password before storing it in MongoDB.
Request Body
{
  "username": "username",
  "email": "user@example.com",
  "password": "password"
}
Success Response
Status: 201 Created
{
  "success": true,
  "message": "Registration successful",
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "<USER_ID>",
    "username": "username",
    "email": "user@example.com"
  }
}
Possible Errors
400 Bad Request
{
  "success": false,
  "message": "Username, email and password are required"
}
409 Conflict
{
  "success": false,
  "message": "Email is already registered"
}
2. Login User
Endpoint
POST /login
Description
Authenticates an existing user by validating their email and password.
Request Body
{
  "email": "user@example.com",
  "password": "password"
}
Success Response
Status: 200 OK
{
  "success": true,
  "message": "Login successful",
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "<USER_ID>",
    "username": "username",
    "email": "user@example.com"
  }
}
Invalid Credentials
Status: 401 Unauthorized
{
  "success": false,
  "message": "Invalid email or password"
}
3. Get Current User
Endpoint
GET /me
Description
Returns the authenticated user's account information.
Authentication
Requires a valid JWT token.
Request Header
Authorization: Bearer <JWT_TOKEN>
Success Response
Status: 200 OK
{
  "success": true,
  "user": {
    "_id": "<USER_ID>",
    "username": "username",
    "email": "user@example.com"
  }
}
Missing Authentication
Status: 401 Unauthorized
{
  "success": false,
  "message": "Authentication required"
}
Invalid or Expired Token
Status: 401 Unauthorized
{
  "success": false,
  "message": "Invalid or expired token"
}
4. Logout
Endpoint
POST /logout
Description
Logs the user out from the application.
The frontend removes the stored authentication token after the logout request.
Success Response
Status: 200 OK
{
  "success": true,
  "message": "Logout successful"
}
Authentication Flow
Register
   ↓
Password Hashing
   ↓
MongoDB
   ↓
JWT Token Generated
   ↓
Token Stored on Client
   ↓
Protected API Request
   ↓
JWT Verification
   ↓
Authenticated User
HTTP Status Codes
Status Code	Meaning
200	Request successful
201	Resource created
400	Invalid or missing input
401	Authentication failed
409	Duplicate email
500	Server error


Security Implementation
AUTHORA uses:
- bcryptjs for password hashing
- JSON Web Tokens for authentication
- Authentication middleware for protected routes
- Environment variables for sensitive configuration
- MongoDB/Mongoose for persistent user storage