import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditWorkout = () => {
  const { id } = useParams(); // Extract workout ID from URL
  const navigate = useNavigate();
  
  // Initialize workout state with the updated schema
  const [workout, setWorkout] = useState({
    name: "",
    description: "",
    sets: 0,
    repetitions: 0,
    timeSpent: "",
    caloriesBurnt: 0,
  });

  // Fetch workout details on component load
  useEffect(() => {
    axios
      .get(`http://localhost:5000/workouts/${id}`)
      .then((response) => {
        setWorkout(response.data);
      })
      .catch((error) => {
        console.error("Error fetching workout details:", error);
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/workouts/${id}`, workout)
      .then(() => {
        alert("Workout updated successfully!");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error updating workout:", error);
      });
  };

  return (
    <div className="container mt-5" style={{ fontFamily: "'Raleway', sans-serif", maxWidth: "600px" }}>
      <h2 style={{ color: "#2d6a4f" }}>Edit Workout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Workout Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={workout.name}
            onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={workout.description}
            onChange={(e) => setWorkout({ ...workout, description: e.target.value })}
            rows="3"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sets" className="form-label">Number of Sets</label>
          <input
            type="number"
            className="form-control"
            id="sets"
            value={workout.sets}
            onChange={(e) => setWorkout({ ...workout, sets: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="repetitions" className="form-label">Number of Repetitions</label>
          <input
            type="number"
            className="form-control"
            id="repetitions"
            value={workout.repetitions}
            onChange={(e) => setWorkout({ ...workout, repetitions: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="timeSpent" className="form-label">Time Spent</label>
          <input
            type="text"
            className="form-control"
            id="timeSpent"
            value={workout.timeSpent}
            onChange={(e) => setWorkout({ ...workout, timeSpent: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="caloriesBurnt" className="form-label">Calories Burnt</label>
          <input
            type="number"
            className="form-control"
            id="caloriesBurnt"
            value={workout.caloriesBurnt}
            onChange={(e) => setWorkout({ ...workout, caloriesBurnt: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Update Workout</button>
      </form>
    </div>
  );
};

export default EditWorkout;
