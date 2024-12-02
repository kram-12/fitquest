import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Create from "./components/Create";
import WorkoutDetails from "./components/WorkoutDetails";
import EditWorkout from "./components/EditWorkout";
import Analysis from "./components/Analysis"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/workout/:id" element={<WorkoutDetails />} />
        <Route path="/edit/:id" element={<EditWorkout />} />
        <Route path="/analysis" element={<Analysis />} /> 
      </Routes>
    </div>
  );
};

export default App;
