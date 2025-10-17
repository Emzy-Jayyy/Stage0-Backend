🧩 HNG Stage 0 Backend Task — Profile Endpoint
🚀 Overview

This project is a Stage 0 Backend task for the HNG Internship Program.
It implements a simple RESTful API that returns the developer’s profile information and a dynamic cat fact fetched from the Cat Facts API
.

The project demonstrates core backend concepts, including:

Building a REST API with Node.js and Express

Consuming third-party APIs using Axios

Handling errors, timeouts, and rate limiting

Returning well-formatted JSON responses

⚙️ Features

✅ GET /me — Returns:

Developer’s profile (email, name, stack)

Dynamic cat fact from external API

Current UTC timestamp in ISO 8601 format

✅ GET / — Health check endpoint that returns a simple status message.

✅ Handles:

API request failures gracefully

Rate limiting (max 100 requests/min per IP)

CORS for cross-origin access

🧩 Technologies Used

Node.js — Runtime environment

Express.js — Web framework

Axios — For HTTP requests

Dotenv — Environment variable management

CORS — Cross-origin middleware

Express-rate-limit — Prevent abuse or excessive requests

📁 Project Structure
stage0-backend/
│
├── controller/
│   └── profile.js          # Controller logic for /me endpoint
│
├── routes/
│   └── profile.js          # Route definition for /me
│
├── .env                    # Environment variables
├── .gitignore
├── package.json
├── server.js               # Entry point
└── README.md

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/Emzy-Jayyy/Stage0-Backend.git
cd Stage0-Backend

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add your details:

EMAIL="example@gmail.com"
NAME="John Doe"
STACK="Node.js/Express"
PORT=3000
IP=localhost


⚠️ Ensure .env is included in .gitignore so your secrets aren’t exposed.

4️⃣ Run the Server
npm start


You should see:

Server is running on port 3000

🧠 API Endpoints
GET /

Description: Health check route
Response:

{
  "message": "Profile API is running"
}

GET /me

Description: Returns profile info, current timestamp, and a random cat fact.
Response Example:

{
  "status": "success",
  "user": {
    "email": "example@gmail.com",
    "name": "John Doe",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "Cats have five toes on their front paws, but only four toes on their back paws."
}


Error Handling (Fallback Example):

{
  "status": "success",
  "user": {
    "email": "example@gmail.com",
    "name": "John Doe",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "Unable to fetch cat fact at this time. Please try again later."
}

🧰 Testing with Postman

Launch Postman

Create a new request:

Method: GET

URL: http://localhost:3000/me

Click Send

You should get a JSON response with a random cat fact and your profile info.

🚀 Deployment

This project can be deployed to Railway or PXXL App.
Make sure:

The server listens on process.env.PORT

You have added environment variables in your hosting environment

You’ve tested your live /me endpoint externally

Example Live URL:

https://yourapp.up.railway.app/me

📘 Example .env Configuration
EMAIL="example@gmail.com"
NAME="John Doe"
STACK="Node.js/Express"
PORT=3000
IP=localhost

🧑‍💻 Author

Name: John Doe
Email: example@gmail.com

Stack: Node.js/Express

🧠 Lessons Learned

This project helped reinforce key backend concepts:

Creating RESTful endpoints

Fetching and integrating third-party APIs

Proper JSON response formatting

Graceful error handling and fallbacks

Server deployment best practices

🏁 License

This project is licensed under the ISC License.