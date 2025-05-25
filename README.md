
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

---

### 🛠️ Staff Dashboard (Staff)

* View assigned incidents
* Clock-in/out with real-time GPS logging
* Submit live status updates and photos
* Complete shift logs for transparency

📸 **\[Insert Staff Dashboard Screenshot here]**

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
* Historical logs and staff performance tracking

---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/EcoTracker.git
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
| Deployment    | Vercel (Frontend), Railway (Backend) |

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
