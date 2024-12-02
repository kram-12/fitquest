import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const WorkoutDetails = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/workouts/${id}`)
      .then((response) => {
        setWorkout(response.data);
        setError(null); // Reset error if successful
      })
      .catch((error) => {
        console.error("Error fetching workout details:", error);
        setError("Workout not found.");
      });
  }, [id]);

  if (error) return <p className="text-center text-danger">{error}</p>;
  if (!workout) return <p className="text-center">Loading...</p>;

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victorfreitas-841130.jpg&fm=jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
      }}
    >
      <div
        className="card shadow-lg"
        style={{
          width: "400px",
          borderRadius: "12px",
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
          padding: "20px",
          color: "#fff",
        }}
      >
        <h2
          className="card-title text-center mb-3"
          style={{ fontSize: "1.8rem", fontWeight: "bold" }}
        >
          {workout.name}
        </h2>
        <div className="card-body">
          <p>
            <strong>Description:</strong> {workout.description}
          </p>
          <p>
            <strong>Sets:</strong> {workout.sets}
          </p>
          <p>
            <strong>Repetitions:</strong> {workout.repetitions}
          </p>
          <p>
            <strong>Time Spent:</strong> {workout.timeSpent}
          </p>
          <p>
            <strong>Calories Burnt:</strong> {workout.caloriesBurnt}
          </p>
        </div>
        <div
          className="card-footer text-center mt-4"
          style={{
            borderTop: "1px solid #ddd",
            padding: "10px 0",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline-light"
            style={{
              borderRadius: "20px",
              fontSize: "14px",
              padding: "5px 20px",
              fontWeight: "bold",
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
