# Rupesh Kumar Chaudhary — Full-Stack Portfolio

> A modern, responsive, full-stack personal portfolio built with the MERN stack to showcase my journey across **Full-Stack Development, Artificial Intelligence & Machine Learning, and Data Structures & Algorithms in C++**.

[![Live Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-Vercel-black?style=for-the-badge\&logo=vercel)](https://portfolio-rupesh-kumar.vercel.app/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-REST_API-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge\&logo=vercel)](https://vercel.com/)

---

## 🌐 Live Demo

### 🚀 [Visit My Portfolio](https://portfolio-rupesh-kumar.vercel.app/)

The live portfolio showcases my:

* 💻 Full-Stack Development projects
* 🤖 AI & Machine Learning projects
* 🧠 Data Structures & Algorithms journey
* 🛠️ Technical skills
* 🎓 Education
* 📜 Certifications
* 🚀 Development experience
* 📬 Contact information

---

## 📌 About The Project

This repository contains my **personal full-stack developer portfolio**, designed to present my technical skills, projects, education, certifications, and learning journey in a clean and responsive interface.

The portfolio is built using the **MERN stack** and follows a client-server architecture where the React frontend communicates with a Node.js/Express backend through REST APIs.

MongoDB is used for persistent data storage, including contact messages and portfolio-related data.

The project was built with a focus on:

* Responsive and modern UI
* Full-stack architecture
* RESTful API development
* Database integration
* Reusable React components
* Centralized backend error handling
* Environment-based configuration
* Production deployment
* Maintainable project structure

---

# ✨ Features

### 🎨 Responsive Design

* Fully responsive across desktop, tablet, and mobile devices
* Clean and modern developer-focused interface
* Responsive layouts and components
* Easy navigation between portfolio sections

### 🚀 Project Showcase

The portfolio presents my development projects with information such as:

* Project descriptions
* Technologies used
* Key features
* Project links
* Technical implementation details

### 💻 Full-Stack Development

Showcases projects and experience involving:

* React.js
* Node.js
* Express.js
* MongoDB
* REST APIs
* Full-stack application architecture

### 🤖 AI & Machine Learning

The portfolio also highlights my learning and projects in:

* Artificial Intelligence
* Machine Learning
* Python
* Data-driven applications
* AI-powered applications

### 🧠 Data Structures & Algorithms

I am actively strengthening my problem-solving skills through:

* C++
* Data Structures
* Algorithms
* LeetCode
* Algorithmic problem solving

### 🎓 Education & Certifications

Dedicated sections for presenting:

* Academic background
* Technical certifications
* Learning achievements
* Professional development

### 📬 Contact System

The portfolio contains a contact form that communicates with the backend API and stores submitted messages in MongoDB.

### 🔌 REST API

The backend provides REST API endpoints for retrieving portfolio information and handling contact submissions.

### 🛡️ Centralized Error Handling

Backend errors are handled through centralized error-handling middleware to provide consistent API responses and simplify debugging.

### 🌱 Database Seeding

The project includes a database seed script to populate MongoDB with initial portfolio data.

---

# 🏗️ Application Architecture

The application follows a **client-server architecture**:

```text
                    ┌──────────────────────┐
                    │    User / Browser    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    React + Vite      │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
                         Axios / REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Node.js + Express  │
                    │       Backend        │
                    └──────────┬───────────┘
                               │
                            Mongoose
                               │
                               ▼
                    ┌──────────────────────┐
                    │       MongoDB        │
                    │       Database       │
                    └──────────────────────┘
```

### Request Flow

```text
User
  ↓
React Component
  ↓
Axios Request
  ↓
Express Route
  ↓
Controller / Business Logic
  ↓
Mongoose
  ↓
MongoDB
  ↓
API Response
  ↓
React UI
```

This separation keeps the frontend, backend, and database responsibilities organized and maintainable.

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose                                |
| ---------- | -------------------------------------- |
| React.js   | Building the user interface            |
| Vite       | Frontend development and build tooling |
| Axios      | API communication                      |
| CSS        | Responsive and custom styling          |

## Backend

| Technology | Purpose                     |
| ---------- | --------------------------- |
| Node.js    | JavaScript runtime          |
| Express.js | REST API and backend server |
| Mongoose   | MongoDB object modeling     |
| REST API   | Client-server communication |

## Database

| Technology    | Purpose                 |
| ------------- | ----------------------- |
| MongoDB       | Persistent data storage |
| MongoDB Atlas | Cloud database hosting  |

## Development Areas

| Area                   | Technologies                     |
| ---------------------- | -------------------------------- |
| Full-Stack Development | MERN, REST APIs                  |
| AI / ML                | Python, Machine Learning         |
| DSA                    | C++, Algorithms, Data Structures |

## Deployment

| Service       | Purpose              |
| ------------- | -------------------- |
| Vercel        | Portfolio deployment |
| MongoDB Atlas | Cloud database       |

---

# 📂 Project Structure

```text
portfolio/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env.example
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── data/
│   │   └── server.js
│   │
│   ├── .env.example
│   └── package.json
│
├── package.json
└── README.md
```

---

# 🔌 API Endpoints

### Health Check

```http
GET /api/health
```

Checks whether the backend API is running successfully.

### Get Projects

```http
GET /api/projects
```

Returns project information used by the portfolio.

### Submit Contact Message

```http
POST /api/contact
```

Accepts contact-form submissions and stores them in MongoDB.

---

# ⚙️ Run Locally

## 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <PROJECT_FOLDER>
```

## 2. Install dependencies

```bash
npm run install:all
```

## 3. Configure MongoDB

Create a MongoDB Atlas database and obtain your MongoDB connection string.

Copy:

```text
server/.env.example
```

to:

```text
server/.env
```

Then configure the required environment variables.

## 4. Configure the frontend

Copy:

```text
client/.env.example
```

to:

```text
client/.env
```

Configure the required frontend environment variables.

## 5. Start the application

```bash
npm run dev
```

The application will be available at:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:5000
```

---

# 🌱 Seed Database

To populate the MongoDB database with initial portfolio data:

```bash
cd server
npm run seed
```

The portfolio seed data is maintained in:

```text
server/src/data/portfolioData.js
```

---

# 🔐 Environment Variables

Environment variables are intentionally excluded from Git version control.

### Backend

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

### Frontend

Example:

```env
VITE_API_URL=http://localhost:5000
```

> **Never commit real database credentials, API keys, tokens, or other secrets to GitHub.**

---

# 🚀 Deployment

The portfolio is deployed and publicly accessible through **Vercel**.

### Production Website

🌐 **https://portfolio-rupesh-kumar.vercel.app/**

### Deployment Architecture

```text
React + Vite
     │
     ▼
  Vercel
     │
     ▼
Express / Node.js API
     │
     ▼
MongoDB Atlas
```

Production environment variables should be configured through the deployment platform rather than committed to the repository.

---

# 🎯 What This Project Demonstrates

This project demonstrates practical experience with:

* Full-stack MERN development
* React component-based architecture
* REST API development
* Express.js backend development
* MongoDB database integration
* Mongoose data modeling
* Client-server communication
* Responsive web development
* Centralized error handling
* Environment configuration
* Database seeding
* Production deployment

Beyond this project, my current learning journey also focuses on:

### 🤖 Artificial Intelligence & Machine Learning

Exploring machine learning concepts, Python-based ML development, and AI-powered applications.

### 🧠 Data Structures & Algorithms

Strengthening algorithmic thinking and problem-solving skills using **C++**, including regular practice with data structures, algorithms, and coding problems.

---

# 📈 Future Improvements

Some planned improvements include:

* [ ] Admin dashboard for portfolio management
* [ ] Authentication for administrative functionality
* [ ] Improved project filtering and categorization
* [ ] Blog / technical articles section
* [ ] Analytics dashboard
* [ ] Enhanced contact management
* [ ] Automated CI/CD pipeline
* [ ] Additional accessibility improvements
* [ ] More AI/ML project integrations

---

# 👨‍💻 About Me

## Rupesh Kumar Chaudhary

**Computer Science & Engineering Student | Full-Stack Developer | AI/ML Learner | DSA in C++**

I am a Computer Science & Engineering student focused on building real-world software applications while continuously strengthening my foundations in computer science.

My current areas of focus include:

* 💻 **Full-Stack Development** — MERN Stack
* 🤖 **Artificial Intelligence & Machine Learning**
* 🧠 **Data Structures & Algorithms** — C++
* 🐍 **Python**
* 🚀 Building and deploying real-world applications

I enjoy learning by building projects, solving programming problems, and continuously improving my understanding of software development and computer science fundamentals.

---

# 🌐 Connect With Me

* 🌐 **Portfolio:** [portfolio-rupesh-kumar.vercel.app](https://portfolio-rupesh-kumar.vercel.app/)
* 💻 **GitHub:** [github.com/rupesh568](https://github.com/rupesh568)
* 💼 **LinkedIn:** Add your LinkedIn profile here

---

# ⭐ Support

If you found this project interesting or useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is intended for portfolio and educational purposes.
