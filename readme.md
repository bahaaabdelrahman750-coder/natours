# 🏕️ Natours Backend API

A backend-focused tour booking application built with **Node.js, Express.js, MongoDB, and Mongoose**.

I developed the backend of Natours, implementing a complete RESTful API for managing tours, users, reviews, and bookings, along with authentication, authorization, payments, email services, image processing, security, and server-side rendering.

---

## 🚀 Features

### 🔐 Authentication & Authorization

- User signup and login
- JWT-based authentication
- Secure HTTP-only cookies
- Protected routes
- Role-based authorization
- User logout
- Password update
- Forgot password and password reset
- Account deactivation
- Welcome and password reset emails

### 🏕️ Tours

- Full CRUD operations
- Advanced filtering
- Sorting
- Field limiting
- Pagination
- Tour statistics
- Monthly tour plans
- Geospatial queries
- Nearby tour search
- Automatic tour slugs
- Tour image uploads and processing

### ⭐ Reviews

- Create, read, update, and delete reviews
- Protected review operations
- User and tour relationships
- Review population
- Rating aggregation

### 🎟️ Bookings & Payments

- Booking management
- User and tour relationships
- Stripe Checkout integration
- Stripe Test Mode payment flow
- Checkout sessions linked to authenticated users and selected tours

### 📧 Email

- Welcome emails
- Password reset emails
- Nodemailer integration
- Pug email templates

### 🖼️ Image Processing

- User profile image uploads
- Tour image uploads
- Multipart form handling with Multer
- Image resizing and processing with Sharp

### 🛡️ Security

- Helmet security headers
- Express Rate Limit
- MongoDB query sanitization
- XSS protection
- HTTP Parameter Pollution protection
- Password hashing with bcrypt
- JWT authentication
- HTTP-only cookies
- Request body size limits
- Centralized error handling

### 🖥️ Server-Side Rendering

- Pug templates
- Server-side rendering
- MVC architecture
- Dynamic data rendering
- Reusable layouts and templates

---

## 🧰 Tech Stack

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JavaScript**

### Server-Side Rendering

- **Pug**

### Authentication & Security

- **JWT**
- **bcryptjs**
- **Helmet**
- **Express Rate Limit**
- **Mongo Sanitize**
- **XSS protection**
- **HPP**

### Payments

- **Stripe**

### Email

- **Nodemailer**
- **Pug**

### Files & Images

- **Multer**
- **Sharp**

### Testing & Development

- **Postman**
- **Morgan**
- **Axios**
- **Git & GitHub**

---

## 🏗️ Architecture

The application follows the **MVC architecture** with a clear separation between routes, controllers, models, utilities, and views.

```text
Client
  │
  ▼
Routes
  │
  ▼
Controllers
  │
  ▼
Models
  │
  ▼
MongoDB
```

### Project Structure

```text
natours/
│
├── controllers/
├── models/
├── routes/
├── utils/
├── views/
├── public/
├── postman/
├── dev-data/
│
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## 🔑 Authentication Flow

```text
User
 │
 ▼
Signup / Login
 │
 ▼
JWT Generation
 │
 ▼
HTTP-only Cookie
 │
 ▼
Authentication Middleware
 │
 ▼
Protected Route
 │
 ▼
Controller
 │
 ▼
Response
```

Protected resources are accessible only after successful authentication, while authorization middleware controls access based on user roles.

---

## 🌐 API Endpoints

### Tours

```http
GET    /api/v1/tours
GET    /api/v1/tours/:id
POST   /api/v1/tours
PATCH  /api/v1/tours/:id
DELETE /api/v1/tours/:id
```

### Users

```http
POST   /api/v1/users/signup
POST   /api/v1/users/login
GET    /api/v1/users/logout

GET    /api/v1/users/me
PATCH  /api/v1/users/updateMe
PATCH  /api/v1/users/updateMyPassword
DELETE /api/v1/users/deleteMe
```

### Password Reset

```http
POST   /api/v1/users/forgotPassword
PATCH  /api/v1/users/resetPassword/:token
```

### Reviews

```http
GET    /api/v1/reviews
POST   /api/v1/reviews
GET    /api/v1/reviews/:id
PATCH  /api/v1/reviews/:id
DELETE /api/v1/reviews/:id
```

### Bookings

```http
GET    /api/v1/bookings
POST   /api/v1/bookings
GET    /api/v1/bookings/:id
PATCH  /api/v1/bookings/:id
DELETE /api/v1/bookings/:id
```

### Stripe Checkout

```http
GET /api/v1/bookings/checkout-session/:tourId
```

---

## 🗄️ Database Relationships

```text
User
 │
 ├── Reviews
 │
 └── Bookings
        │
        ▼
       Tour
        │
        └── Reviews
```

The application uses **Mongoose references and population** to connect users, tours, reviews, and bookings.

---

## 🧮 Advanced MongoDB Features

The project demonstrates practical MongoDB and Mongoose features including:

- Aggregation pipelines
- `$match`
- `$group`
- `$unwind`
- `$addFields`
- `$project`
- `$sort`
- `$limit`
- Population
- Referenced documents
- Geospatial queries
- Query filtering
- Pagination

---

## 💳 Stripe Integration

Natours integrates **Stripe Checkout** for the tour booking payment flow.

```text
User
 │
 ▼
Select Tour
 │
 ▼
Create Checkout Session
 │
 ▼
Stripe Checkout
 │
 ▼
Payment
 │
 ▼
Booking Flow
```

Stripe is configured for **Test Mode** during development.

> Production payment confirmation should rely on Stripe Webhooks and verified Stripe events rather than trusting client-side redirects alone.

---

## 🧪 API Testing

The project includes Postman resources for testing the API.

The API can be tested for:

- Authentication
- Tours
- Users
- Reviews
- Bookings
- Protected routes
- Filtering
- Sorting
- Pagination
- Stripe Checkout

Postman resources are included in the repository.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/bahaaabdelrahman750-coder/natours.git
cd natours
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
NODE_ENV=development
PORT=3000

DATABASE=your_mongodb_connection_string
DATABASE_PASSWORD=your_database_password

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

EMAIL_USERNAME=your_email
EMAIL_PASSWORD=your_password
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

> Never commit real passwords, database credentials, JWT secrets, API keys, or other sensitive environment variables to GitHub.

### 4. Start the development server

```bash
npm run dev
```

The application will run on:

```text
http://127.0.0.1:3000
```

---

## 🛡️ Error Handling

The application uses centralized error handling with custom application errors and asynchronous controller wrappers.

```text
Request
  │
  ▼
Route
  │
  ▼
Controller
  │
  ├── Success ──► Response
  │
  └── Error ────► Global Error Handler
                       │
                       ▼
                    JSON Error
```

This keeps API error responses consistent and separates error-handling logic from business logic.

---

## 📚 Backend Skills Practiced

This project provided practical experience with:

- RESTful API development
- MVC architecture
- Express.js middleware
- MongoDB and Mongoose
- Data modeling and relationships
- JWT authentication
- Authorization and role-based access
- Password hashing
- Cookies
- API security
- Centralized error handling
- MongoDB aggregation
- Geospatial queries
- File uploads
- Image processing
- Email services
- Server-side rendering with Pug
- Stripe Checkout integration
- Postman API testing
- Environment variables
- Git and GitHub

---

## 📌 Project Status

The project implements the main backend functionality of a tour booking platform, including:

- Tours API
- Users API
- Reviews API
- Bookings API
- Authentication and authorization
- Server-side rendered views
- Email functionality
- Image processing
- Stripe Checkout integration
- Security middleware
- MongoDB aggregation
- Geospatial features

Stripe is currently configured for **Test Mode**.

---

## 👨‍💻 Author

### Bahaa Abdelrahman

Backend Developer focused on:

**Node.js • Express.js • MongoDB • REST APIs**

GitHub:

https://github.com/bahaaabdelrahman750-coder

---

## 📄 License

This project was built for educational and portfolio purposes.
