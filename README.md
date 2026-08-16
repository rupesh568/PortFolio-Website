# Rupesh Kumar Chaudhary — MERN Portfolio

A production-oriented, responsive personal portfolio platform built with MongoDB, Express.js, React.js and Node.js.

## Stack

- React + Vite
- Node.js + Express
- MongoDB + Mongoose
- Axios
- CSS with responsive design
- REST API
- Centralized error handling
- MongoDB seed data
- Contact-message persistence

## Run locally

1. Install Node.js 20+.
2. Create MongoDB Atlas database.
3. Copy `server/.env.example` to `server/.env`.
4. Add your MongoDB URI.
5. Copy `client/.env.example` to `client/.env`.
6. Run:

```bash
npm run install:all
npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:5000

## Seed database

```bash
cd server
npm run seed
```

## API

- `GET /api/health`
- `GET /api/projects`
- `POST /api/contact`

## Deployment

Frontend can be deployed to Vercel. Backend can be deployed to Render/Railway. MongoDB Atlas is used for production persistence.

## Personalization

Update `server/src/data/portfolioData.js` with verified personal information before deployment.
