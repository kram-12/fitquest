import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/workouts")
      .then((response) => {
        setWorkouts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching workouts:", error);
        setLoading(false);
      });
  }, []);

  const filteredWorkouts = workouts.filter((workout) => {
    const query = searchQuery.toLowerCase();
    return (
      workout.name.toLowerCase().includes(query) ||
      workout.description.toLowerCase().includes(query) ||
      workout.timeSpent.toLowerCase().includes(query) ||
      workout.caloriesBurnt.toString().includes(query) ||
      workout.sets.toString().includes(query) ||
      workout.repetitions.toString().includes(query)
    );
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this workout?")) {
      axios
        .delete(`http://localhost:5000/workouts/${id}`)
        .then(() => {
          const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
          setWorkouts(updatedWorkouts);
        })
        .catch((error) => {
          console.error("Error deleting workout:", error);
        });
    }
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4", minHeight: "100vh", fontFamily: "'Raleway', sans-serif" }}>
      {/* Header Section */}
      <header
        className="p-5 text-white"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victorfreitas-841130.jpg&fm=jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontFamily: "'Poppins', sans-serif" }}>Welcome to FitQuest</h1>
        <p>Your one-stop platform to achieve your fitness goals.</p>
      </header>

      {/* Main Content */}
      <div className="container mt-4">
        {/* Search Bar and Add Button */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control me-3"
            placeholder="Search workouts (e.g., name, sets, time spent)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              height: "45px",
              borderColor: "#40916c",
              borderWidth: "2px",
              borderRadius: "8px",
              fontSize: "16px",
              padding: "10px",
            }}
          />
          <Link to="/create" className="btn btn-success" style={{ height: "45px", lineHeight: "30px" }}>
            Add New Workout
          </Link>
        </div>

        {/* Workouts Section */}
        <section>
          <h2 style={{ color: "#2d6a4f" }}>Today's Workouts</h2>
          {loading ? (
            <p>Loading workouts...</p>
          ) : filteredWorkouts.length > 0 ? (
            <div className="row">
              {filteredWorkouts.map((workout) => (
                <div className="col-md-4 mb-4" key={workout.id}>
                  <div
                    className="shadow-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "1px solid #ddd",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      padding: "20px",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <h5 style={{ color: "#2d6a4f", fontWeight: "bold" }}>{workout.name}</h5>
                    <p style={{ fontSize: "14px", margin: "10px 0" }}>
                      <strong>Description:</strong> {workout.description} <br />
                      <strong>Sets:</strong> {workout.sets} <br />
                      <strong>Repetitions:</strong> {workout.repetitions} <br />
                      <strong>Time Spent:</strong> {workout.timeSpent} <br />
                      <strong>Calories Burnt:</strong> {workout.caloriesBurnt}
                    </p>
                    <div className="d-flex justify-content-between">
                      <Link to={`/workout/${workout.id}`} className="btn btn-outline-primary btn-sm">
                        Read
                      </Link>
                      <Link to={`/edit/${workout.id}`} className="btn btn-outline-warning btn-sm">
                        Edit
                      </Link>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDelete(workout.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No workouts found matching your search criteria.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
