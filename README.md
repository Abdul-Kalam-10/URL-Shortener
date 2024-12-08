🌐 URL Shortener
A simple and efficient URL shortener built with Node.js, Express, and MongoDB. This application allows users to shorten long URLs into easily shareable short links.

🛠 Features
Shorten any long URL into a custom or randomly generated short URL.
Redirect users to the original URL when accessing the short URL.
RESTful API support for URL management.
Validation for proper URL formats.
Basic analytics for URL usage (e.g., click count).

🚀 Getting Started
Prerequisites
Node.js (v14+ recommended)
MongoDB (local or cloud instance)

🏃‍♂️ Running the Application
Development Mode
npm run dev
Production Mode
npm start

📋 API Endpoints
1. Shorten URL
POST /api/shorten
Request Body:
{
  "longUrl": "https://www.example.com"
}
Response:
{
  "shortUrl": "http://localhost:3000/abcd123",
  "longUrl": "https://www.example.com",
  "urlCode": "abcd123"
}

📂 Project Structure

/project
 ├── controllers/        # Contains controller logic
 ├── models/             # Contains MongoDB schemas
 ├── node_modules/       # Automatically managed by npm
 ├── routes/             # Contains route definitions
 ├── connector.js        # Database connection logic
 ├── index.js            # Entry point of the application
 ├── package.json        # Project dependencies and scripts
 ├── package-lock.json   # Dependency lock file
 └── README.md           # Project documentation


📦 Dependencies
-Node.js: Runtime environment.
-Express: Web framework for handling API routes.
-Mongoose: MongoDB object modeling.
-dotenv: For managing environment variables.
-nodemon (dev): Automatically restarts the server during development.

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

🌟 Acknowledgments
Inspired by various URL shortener services like Bitly.
Built with love using Node.js and MongoDB.
