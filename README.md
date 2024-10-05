
# 🌐 REST API Server

This is the **REST API Server** for the Workout Tracker App, built with **Express.js** and **Nodemon** for development. It powers the backend functionality, handling user data, workout tracking, and more.

## 🚀 Features

- **Express.js** for routing and backend logic 🛠️
- **Nodemon** for hot-reloading in development 🔄
- **Supabase** for user management and data storage 🗄️
- Secure **JWT Authentication** 🔑
- Handles all API requests related to user data, workouts, and comparisons 📊

## 💻 Tech Stack

- **Backend**: Express.js 🌐
- **Development Tool**: Nodemon 🛠️
- **Database**: Supabase 🗄️
- **Authentication**: JSON Web Tokens (JWT) 🔐

## 📱 How to Run

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/rest-api-server.git
   ```

2. **Install dependencies**  
   ```bash
   cd supabase-express-drizzle-ts
   npm install
   ```

3. **Set up environment variables**  
   - Add your Supabase API keys, JWT secret, and other environment variables in a `.env` file.

4. **Run the server in development**  
   ```bash
   npm run dev
   ```
   Nodemon will automatically restart the server whenever file changes are detected.

5. **Run the server in production**  
   ```bash
   npm start
   ```

6. **API Endpoints**  
   You can now start making requests to `http://localhost:3000/api`.

## 📋 Available Endpoints

- **POST /register** - Register a new user 📝
- **POST /login** - Log in with existing credentials 🔑
- **GET /workouts** - Retrieve workout data 🏋️‍♂️
- **POST /workouts** - Log a new workout session 📅

## 🔒 License

This project is for production use and is **not open to contributions or forks**. Please contact the developer for any inquiries.

---
