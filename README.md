### **README for FitQuest - Fitness Tracker**

---

## **FitQuest - Fitness Tracker**

FitQuest is a React-based fitness tracking web application designed to help users monitor their workout routines, analyze fitness progress, and achieve their health goals. The app allows users to create, read, update, delete, and search workouts, offering a seamless and intuitive user experience.

---

### **Features**

- **CRUD Operations**: Add, edit, delete, and view workout details.
- **Search Functionality**: Quickly search for specific workouts by name.
- **Fitness Analysis**: Visualize fitness insights, such as average time spent, calories burnt, and top performances.
- **Responsive UI**: Designed for a smooth experience across devices.
- **Login and Signup Pages**: User authentication for secure access.
- **React Router Integration**: Enables dynamic page navigation.
- **Backend**: Powered by a JSON Web Server for handling data.

---

### **Technology Stack**

- **Frontend**: 
  - React
  - React Router DOM
  - Bootstrap (for styling)
- **Backend**: JSON Server
- **HTTP Requests**: Axios

---

### **Dependencies**

Ensure you have the following dependencies installed:
```bash
npm install react-router-dom
npm install bootstrap
npm install axios
npm install -g json-server
```

---

### **Project Structure**

```plaintext
src/
├── components/
│   ├── Analysis.jsx
│   ├── Create.jsx
│   ├── EditWorkout.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── Signup.jsx
│   ├── WorkoutDetails.jsx
│   ├── Login.jsx
├── App.jsx
├── App.css
├── index.css
├── main.jsx
└── db.json (for JSON Server)
```

---

### **Installation Instructions**

Follow these steps to set up and run the project locally.

#### **Prerequisites**
- Node.js installed on your machine.
- npm or yarn package manager.

#### **Steps**
1. **Clone the Repository**
   ```bash
   git clone https://github.com/kram-12/fitquest.git
   cd fitquest
   ```

2. **Install Dependencies**
   Install the required dependencies:
   ```bash
   npm install
   npm install react-router-dom
   npm install bootstrap
   npm install axios
   npm install -g json-server
   ```

3. **Start the JSON Server**
   Run the JSON server to simulate a backend.
   ```bash
   json-server --watch db.json --port 5000
   ```

4. **Start the React App**
   Start the frontend application.
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

### **Usage**

1. **Login or Signup**:
   - Start by signing up or logging in to your account.

2. **Manage Workouts**:
   - Navigate to the **Home** page to create, edit, or delete workouts.
   - Enter workout details such as name, description, sets, repetitions, time spent, and calories burnt.

3. **Analyze Fitness**:
   - Visit the **Analysis** page to view insights like top workouts, average time spent, and calories burnt.

---

### **API Endpoints**

The app communicates with a JSON Web Server using the following endpoints:

1. **Get all workouts**:
   - `GET /workouts`

2. **Get a single workout by ID**:
   - `GET /workouts/:id`

3. **Add a new workout**:
   - `POST /workouts`

4. **Update a workout**:
   - `PUT /workouts/:id`

5. **Delete a workout**:
   - `DELETE /workouts/:id`

---

### **Contributing**

Contributions are welcome! Feel free to fork the repository and submit pull requests.

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

### **Contact**

For questions or suggestions, feel free to contact:
- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

Enjoy tracking your fitness journey with **FitQuest**! 🚀