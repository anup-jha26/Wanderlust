# 🌍 WanderLust – A MERN Stack Airbnb Clone

WanderLust is a full-featured web application inspired by Airbnb, designed for users to explore, list, and manage vacation rentals.  
This platform includes **user authentication, location-based listings using Mapbox, image uploads via Cloudinary, review functionality, and complete CRUD support.**  
It is built using the **MERN stack** with an emphasis on clean architecture, modular code, and scalable design.

---

## 🚀 Live Demo

👉 [wanderlust-5w8k.onrender.com](https://wanderlust-5w8k.onrender.com/listings)

---

## 🛠️ Built With

- **Backend:** Node.js, Express.js
- **Frontend Templating:** EJS
- **Database:** MongoDB & Mongoose
- **Authentication:** Passport.js (Local Strategy)
- **Geolocation:** Mapbox API
- **Image Uploads:** Cloudinary + Multer
- **Hosting:** Render

---

## ✨ Key Features

- 🔐 User login & registration with Passport.js (local strategy)
- 🏡 Create, edit, delete, and view listings
- 📍 Mapbox for geolocation and place mapping
- 📷 Upload and manage images (Cloudinary)
- 💬 Review system with CRUD operations
- 🛡️ Authentication & Authorization middleware
- ❗ Custom error handling and form validation
- 📁 MVC architecture with separation of concerns

---

## 📦 Installation

### Prerequisites

- Node.js
- MongoDB Atlas or local MongoDB
- Cloudinary account
- Mapbox access token

### Setup Steps

```bash
# 1. Clone the repository
git clone https://github.com/anup-jha26/Wanderlust.git
cd Wanderlust

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your MongoDB URI, JWT secret, Cloudinary and Mapbox credentials

# 4. Start the development server
node app.js
```
### Visit: http://localhost:8080

## 🌐Environment Variables
In your .env file:

ATLASDB_URL = your_mongo_uri  
SECRET = your_secret_key  
CLOUD_NAME = your_cloud_name  
CLOUD_API_KEY = your_api_key  
CLOUD_API_SECRET = your_api_secret  
MAP_TOKEN = your_mapbox_token  

---

## 🧪API Overview (Sample Routes)

| Endpoint              | Method | Description           |
| --------------------- | ------ | --------------------- |
| `/auth/register`      | POST   | User registration     |
| `/auth/login`         | POST   | User login            |
| `/listings/`          | GET    | List all places       |
| `/listings/:id`       | GET    | View a specific place |
| `/listings/`          | POST   | Create new listing    |
| `/listings/:id`       | PUT    | Edit a listing        |
| `/listings/:id`       | DELETE | Delete a listing      |
| `/reviews/:listingId` | POST   | Add a review          |
| `/reviews/:reviewId`  | DELETE | Delete a review       |

---

## Author
Anup Kumar Jha  
📧 aniljha1076@gmail.com  
🔗 LinkedIn – anup-jha26  

## License
This project is for educational and portfolio purposes only.  
Not affiliated with Airbnb.  
