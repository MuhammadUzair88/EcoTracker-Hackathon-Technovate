
# 🌱 EcoTracker – Community Environmental Reporting Platform

> “Together, we don’t just report the problem—we become the solution.”

EcoTracker is a powerful full-stack platform that empowers citizens to report environmental issues, enables admins to manage community responses, and equips staff to take real action. Built to enhance environmental accountability through transparency and tracking.

---

## 📁 Project Structure

```bash
/
├── Admin       # Admin dashboard - manages incidents, assignments, reports
├── Backend     # Node.js/Express backend - handles APIs, DB, authentication
├── Frontend    # Citizen/User dashboard - reports issues, tracks status
├── Staff       # Employee dashboard - task updates, shift tracking
└── .gitignore  # Environment and dependency exclusions
````

---

## ⚙️ Core Functionalities

### 👥 User Dashboard (Frontend)

* Report incidents: photos, descriptions, and geolocation on a map
* Choose from categories: illegal dumping, pollution, deforestation, etc.
* Track live status (new, verified, in progress, resolved)
* Anonymous reports supported
* Instant updates

📸 **\[Insert User Dashboard Screenshot here]**
![image](https://github.com/user-attachments/assets/424eca99-0e0d-4ec7-8adf-ab79b132d35a)
![image](https://github.com/user-attachments/assets/8f1a7108-1876-4b2f-aae0-971a5ddce268)
![image](https://github.com/user-attachments/assets/bbf7bda7-16cc-465a-aa68-986706639047)
![image](https://github.com/user-attachments/assets/ae766fcc-245a-4a5b-84b4-34f09980c93f)
![image](https://github.com/user-attachments/assets/8604e516-319a-44b3-a078-b1de06fe3247)
![image](https://github.com/user-attachments/assets/93b02b06-c636-4dbf-a9dd-20f6d90831fc)
![image](https://github.com/user-attachments/assets/694a92c5-c75a-4612-bc7f-5e00f2717563)

---

### 🧠 Admin Dashboard (Admin)

* View all incoming reports
* Verify incidents before action
* Assign employees for resolution
* Monitor progress with geospatial tracking
* Full analytics: report stats, staff count, shift logs

📸 **\[Insert Admin Dashboard Screenshot here]**
![image](https://github.com/user-attachments/assets/1147b775-8731-4cea-8edb-3db16e5a7cd7)
![image](https://github.com/user-attachments/assets/759b9c87-e290-4914-96af-da1d83cc613f)
![image](https://github.com/user-attachments/assets/91c226ab-cfb0-4e4f-ad10-72663860119d)
![image](https://github.com/user-attachments/assets/911a7a91-15cb-40d9-8443-458cd2e24289)
![image](https://github.com/user-attachments/assets/1d402e25-b3c3-43c0-8b3e-90cc4aed5b9e)
![image](https://github.com/user-attachments/assets/6aa35677-59e8-4fe6-b4d3-103a419f4e51)
![image](https://github.com/user-attachments/assets/707e73ec-cc4d-4894-bbba-876dd00565e5)
![image](https://github.com/user-attachments/assets/216f95fa-e2c5-4c81-a44b-1b5f17e86f08)
![image](https://github.com/user-attachments/assets/0e485d94-f88d-4237-a719-2c171cee0f38)
![image](https://github.com/user-attachments/assets/b9e55ab4-cecf-4e98-944c-60cde7398a17)
![image](https://github.com/user-attachments/assets/09234826-9cb2-4f39-add2-9c7c38386f7a)


---

### 🛠️ Staff Dashboard (Staff)

* View assigned incidents
* Clock-in/out with real-time GPS logging
* Submit live status updates and photos
* Complete shift logs for transparency

📸 **\[Insert Staff Dashboard Screenshot here]**
![image](https://github.com/user-attachments/assets/d4da9107-f641-4674-9f40-ec8e3127b3ac)
![image](https://github.com/user-attachments/assets/73bb6863-e8f3-4a19-a8a7-8aba44e60656)
![image](https://github.com/user-attachments/assets/e2370384-4801-4a95-907c-2af1bd7e06bc)
![image](https://github.com/user-attachments/assets/396d14f4-9350-4a4c-ba62-d0312e38de32)


---

## 🔒 Trust & Security

* Role-based access (Users, Admins, Staff)
* Anonymous reporting support
* Staff location only tracked during active shifts
* JWT-based authentication
* Encrypted user data

---

## 📊 Smart Environmental Tracking

* Live dashboards with charts and map heatmaps
* Status breakdown: pending, in-progress, resolved
* Time-to-resolve statistics
  
---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
[git clone https://github.com/your-username/EcoTracker.git](https://github.com/MuhammadUzair88/EcoTracker-Hackathon-Technovate.git)
cd EcoTracker
```

### 2. Set up environment variables

Create `.env` files in the `/Backend`, `/Frontend`, `/Admin`, and `/Staff` directories. Include variables like:

```env
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
CLOUDINARY_URL=your_url
PORT=5000
```

### 3. Install dependencies

```bash
# Backend
cd Backend
npm install

# Frontend (User Dashboard)
cd ../Frontend
npm install

# Admin Dashboard
cd ../Admin
npm install

# Staff Dashboard
cd ../Staff
npm install
```

### 4. Run the full system

```bash
# In Backend
npm start

# In Frontend/Admin/Staff (each in separate terminals)
npm run dev
```

---

## 🌍 Tech Stack

| Layer         | Technology                           |
| ------------- | ------------------------------------ |
| Frontend      | React.js, Tailwind CSS               |
| Backend       | Node.js, Express.js                  |
| Database      | MongoDB, Mongoose                    |
| Cloud Storage | Cloudinary                           |
| Maps & Geo    | Leaflet, Geolocation API             |
| Auth          | JWT, Bcrypt                          |

---

## ✨ Upcoming Features

* 🌐 Community forums for discussions and awareness
* 📅 Cleanup event scheduling & volunteer signups
* 📈 Neighborhood eco health scoring
* 🏛 Government monitoring portal

---

## 🙌 Contributing

We welcome contributions that help improve or expand EcoTracker. Open an issue or PR with your suggestions!

---

## 🧠 Inspiration

Built for the community. Inspired by the need for environmental transparency, citizen empowerment, and real on-ground change.

> “Protect your place. Empower your people. Heal your habitat.”

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 💚 Made with heart, maps, and code.

```

Let me know if you’d like this also saved as a downloadable `.md` or `.pdf` file — I can generate it for you.
```
