# 🔐 AuthNest – Full Stack User Management System

AuthNest is a secure and scalable **full-stack user management application** built using **Node.js**, **Express**, **MongoDB**, and a simple **HTML/CSS/JavaScript frontend**. It provides user registration, login, JWT-based authentication, and protected APIs — with Swagger documentation and production-ready structure.

---

## 🚀 Features

- ✅ User Registration (name, email, phone, password)
- ✅ Secure Login with JWT Token
- ✅ Protected Routes (requires valid token)
- ✅ MongoDB Atlas Integration
- ✅ Password Encryption using bcrypt
- ✅ RESTful API with Express.js
- ✅ Swagger UI for API Documentation
- ✅ Frontend UI with vanilla JavaScript
- ✅ Proper error handling and validation
- ✅ Environment variables for config security

---

## 🧱 Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (jsonwebtoken)
- Bcrypt
- dotenv
- Swagger UI

### Frontend:
- HTML5
- CSS3
- JavaScript (Fetch API)

---

## 📂 Folder Structure

```
authnest/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   └── swagger.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```




---

## 🔐 Environment Variables

Create a `.env` file in the root with the following:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
🛠️ Installation & Usage
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/authnest.git
cd authnest
2. Install backend dependencies
bash
Copy
Edit
npm install
3. Run the backend server
bash
Copy
Edit
npm run dev
Make sure MongoDB is connected and the server runs on http://localhost:5000 or your .env port.

4. Open frontend
Open the file frontend/index.html in your browser.

You can now register, login, and fetch users from the UI!
