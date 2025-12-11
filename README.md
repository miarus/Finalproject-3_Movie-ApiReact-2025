# React Movie Frontend – Superproject 3

This is a simple React frontend that shows movies from my backend API (Project 2).  
I built this as part of the Full Stack course at Laurea University of Applied Sciences.
The project fetches data from an external backend API created in Project 2.

The purpose was to learn:

- React basics (components, hooks)
- React Router
- AJAX requests using Axios
- Fetching movie data from a backend API
- Deploying a frontend to Render

## 📁 Reflections

At first, I had many problems with the project structure.  
I did not have React Router or Axios installed, and my package files were duplicated.  
Later a fellow student helped me understand the correct setup.

This taught me that I must work step by step, keep things organized, and test often.
Having a visual setup of the parts needed seems to be the way to go for me, as otherwise approach is too abstract.
All in all, this project taught me how React components work,how routing and data fetching are added manually, how inportant it is to install the correct package, how to deploy a frontend using render, and how to debug/ solve problems step by step with patience.

---

## 🌍 Live Deployment

Frontend on Render:  
👉 (Add your Render link here)

Backend API URL:  
👉 (https://movie-api-project-2-full-stack-2025.onrender.com)

## 📁 Project Structure

react-movie-superfrontend/
│── public/ # Static assets
│── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components (Home, Movies, SingleMovie)
│ ├── hooks/ # Custom data fetching hooks
│ ├── App.jsx # React Router configuration
│ └── main.jsx # App root
│── package.json
│── vite.config.js
│── README.md

## 🎯 What this frontend does

- Loads movie data from my backend API
- Shows a list of movies
- Shows a single movie when clicked
- Uses Axios to make API requests
- Uses React Router for navigation
- Basic styling with Bootstrap

---

### 🧱 Technologies Used

- **React**
- **React Router**
- **Axios**
- **Bootstrap**
- **Vite** (development server and build tool)
- **Render** (deployment)

---

## 🔌 How the frontend talks to the backend

The frontend uses a custom hook:
src/hooks/useApi.js

The backend URL is stored in: VITE_API_BASE_URL=https://movie-api-project-2-full-stack-2025.onrender.com

The frontend calls:

GET /movies
GET /movies/:id

## 🛠 Installation & Running Locally

### Requirements

- Node.js installed

### Steps on Mac

```bash
# Download the project
git clone <your_repository_link>
cd react-movie-superfrontend

# Install packages
npm install

# Create .env file
VITE_API_URL="your_backend_url_here"

# Start the project
npm run dev
Runs at:
http://localhost:5173

---

## 📦 Build for Production

npm run build

---

## 🌐 Deployment Steps (Render)

1. Push project to GitHub
2. Create new **Static Site** on Render
3. Connect your GitHub repo
4. Set:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Add environment variable:
   - `VITE_API_URL = <your backend URL>`
6. Deploy

---



## 🎬 Video Presentation

My video presentation link:
➡️ **(Add your link here)**

---

## 📄 Written Report (if using Option 2)

A separate Word document describes:
- Project goals
- Technical implementation
- Learning outcomes
- Screenshots

(This README contains only the essential project documentation.)

---

## ✔️ GitHub Repository

Ensure the repository is **public** and includes:
- No secrets
- No API keys
- No .env files


```
