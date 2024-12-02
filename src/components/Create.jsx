import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sets, setSets] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [caloriesBurnt, setCaloriesBurnt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { name, description, sets, repetitions, timeSpent, caloriesBurnt };

    axios
      .post("http://localhost:5000/workouts", newWorkout)
      .then(() => navigate("/home"))
      .catch((error) => console.error("Error creating workout:", error));
  };

  return (
    <div className="container mt-5">
      <h2>Add New Workout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Workout Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="sets" className="form-label">Number of Sets</label>
          <input
            type="number"
            id="sets"
            className="form-control"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="repetitions" className="form-label">Number of Repetitions</label>
          <input
            type="number"
            id="repetitions"
            className="form-control"
            value={repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="timeSpent" className="form-label">Time Spent</label>
          <input
            type="text"
            id="timeSpent"
            className="form-control"
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="caloriesBurnt" className="form-label">Calories Burnt</label>
          <input
            type="number"
            id="caloriesBurnt"
            className="form-control"
            value={caloriesBurnt}
            onChange={(e) => setCaloriesBurnt(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Add Workout</button>
      </form>
    </div>
  );
};

export default Create;
