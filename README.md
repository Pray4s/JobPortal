JobPortal

JobPortal is a comprehensive MERN stack application designed to streamline job postings and applications. It includes functionalities for both administrators and users, enabling seamless management of jobs, companies, and applicants.

Features

Admin Features:

Company Management:

Add, edit, and view companies.

Manage company details including logo and registration date.

Job Management:

Post new jobs.

Edit and manage existing job postings.

View applicants for specific jobs.

User Features:

User Authentication:

Secure login and signup functionality.

Job Browsing:

Explore job listings with detailed descriptions.

Filter jobs by title or company name.

Profile Management:

View and update user profile details.

Technology Stack

Frontend:

React.js: Component-based architecture for dynamic UI.

Redux: State management for authentication and data.

React Router: For seamless navigation.

Tailwind CSS: Styling for consistent and responsive design.

Backend:

Node.js: JavaScript runtime for server-side operations.

Express.js: Web framework for handling API requests.

MongoDB: NoSQL database for managing data.

Mongoose: Object Data Modeling (ODM) library for MongoDB.

Deployment:

Frontend: Deployed using [Your Deployment Platform].

Backend: Hosted on [Your Hosting Service].

Installation

Clone the repository:

git clone https://github.com/your-username/jobportal.git

Navigate to the project directory:

cd jobportal

Install dependencies:

# For frontend
cd client
npm install

# For backend
cd ../server
npm install

Set up environment variables:
Create a .env file in the server directory with the following:

PORT=8000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key

Start the development servers:

# Start backend
cd server
npm run dev

# Start frontend
cd client
npm start

Open the application in your browser:

http://localhost:3000

Folder Structure

Frontend (client):

client/
|-- src/
    |-- components/
    |   |-- admin/
    |   |   |-- Companies.jsx
    |   |   |-- CompaniesTable.jsx
    |   |   |-- AdminJobs.jsx
    |   |   |-- PostJob.jsx
    |   |   |-- Applicants.jsx
    |   |-- auth/
    |   |   |-- Login.jsx
    |   |   |-- Signup.jsx
    |   |-- shared/
    |   |   |-- Navbar.jsx
    |-- App.jsx
    |-- index.js

Backend (server):

server/
|-- models/
|   |-- User.js
|   |-- Job.js
|   |-- Company.js
|-- routes/
|   |-- authRoutes.js
|   |-- jobRoutes.js
|   |-- companyRoutes.js
|-- controllers/
|   |-- authController.js
|   |-- jobController.js
|   |-- companyController.js
|-- server.js

API Endpoints

Authentication:

POST /api/v1/auth/signup: User registration.

POST /api/v1/auth/login: User login.

Jobs:

GET /api/v1/job: Fetch all jobs.

POST /api/v1/job: Create a new job.

GET /api/v1/job/:id: Fetch a specific job.

PUT /api/v1/job/:id: Update job details.

Companies:

GET /api/v1/company: Fetch all companies.

POST /api/v1/company: Register a new company.

GET /api/v1/company/:id: Fetch a specific company.

PUT /api/v1/company/:id: Update company details.

Known Issues

Ensure unique keys for lists in React components to avoid warnings.

Handle unauthorized access (401 errors) by checking API tokens.

Contributing

Fork the repository.

Create a new branch for your feature:

git checkout -b feature-name

Commit your changes:

git commit -m "Add feature"

Push to the branch:

git push origin feature-name

Create a Pull Request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For any questions or feedback, please reach out to:

Prayas Shriyan

[Email Address]

[GitHub Profile]

