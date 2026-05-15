# PizzaHub - Full Stack MERN Pizza Delivery Application

A modern full stack pizza delivery web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

This project allows users to browse pizzas, add items to cart, place orders, and manage authentication securely using JWT. It also includes an admin dashboard for managing pizzas dynamically.

---

# 🚀 Features

## 👤 User Features

- User Registration & Login
- JWT Authentication
- Browse Pizza Menu
- Search & Filter Pizzas
- Add To Cart
- Quantity Management
- Checkout System
- Order Placement
- Order History
- Responsive UI

---

## 🛠️ Admin Features

- Admin Dashboard
- Add New Pizzas
- Delete Existing Pizzas
- Dynamic Pizza Management
- MongoDB Database Integration

---

# 🧰 Tech Stack

## Frontend
- React.js
- React Router DOM
- Context API
- Axios
- CSS3

---

## Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

---

## Database
- MongoDB Atlas
- Mongoose

---

# 📂 Project Structure

```bash
PizzaDeliveryApplication/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.js
│   │   └── index.js
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/PizzaHub-MERN-App.git
```

---

## 2️⃣ Navigate Into Project

```bash
cd PizzaHub-MERN-App
```

---

# 🔹 Backend Setup

## Go To Server Folder

```bash
cd server
```

## Install Dependencies

```bash
npm install
```

## Create `.env` File

```env
MONGO_URI=your_mongodb_connection_string
```

## Start Backend Server

```bash
npx nodemon server.js
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔹 Frontend Setup

## Open New Terminal

```bash
cd client
```

## Install Dependencies

```bash
npm install
```

## Start React App

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# 🔐 Authentication

This project uses:
- JWT (JSON Web Tokens)
- bcrypt.js password hashing
- Protected Routes

---

# 📦 API Routes

## Authentication

```bash
POST /api/auth/register
POST /api/auth/login
```

---

## Pizzas

```bash
GET    /api/pizzas
POST   /api/pizzas
DELETE /api/pizzas/:id
```

---

## Orders

```bash
POST /api/orders
GET  /api/orders/:userId
```

---

# 🌟 Future Improvements

- Online Payment Integration
- Cloudinary Image Upload
- Admin Role Authentication
- Order Tracking
- Dark/Light Theme
- Mobile Hamburger Navbar
- Deployment on Vercel & Render

---

# 📸 Screenshots

Add screenshots here after deployment.

Example:

```md
![Home Page](screenshot.png)
```

---

# 👨‍💻 Author

## Mohammed Nouman

- GitHub: https://github.com/mohammednouman555
- LinkedIn: https://www.linkedin.com/in/mohammed-nouman-2a8989343

---

# ⭐ If You Like This Project

Give this repository a star on GitHub.