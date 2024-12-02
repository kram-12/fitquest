import React from "react";

const Analysis = () => {
  // Shared style for the cards
  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Added smooth transition for transform and box-shadow
    cursor: "pointer",
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        fontFamily: "'Raleway', sans-serif",
      }}
    >
      {/* Header Section */}
      <header
        className="p-5 text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victorfreitas-841130.jpg&fm=jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontFamily: "'Poppins', sans-serif" }}>Fitness Analysis</h1>
        <p>Track your progress and insights to stay on top of your fitness journey!</p>
      </header>

      {/* Main Content */}
      <div className="container mt-5">
        <section className="mb-5">
          <h2 style={{ color: "#2d6a4f" }}>Workout Statistics</h2>
          <div className="row">
            {/* Cards */}
            {[ 
              { title: "Top Workout", text: "Push Ups - 100 Reps" },
              { title: "Average Time Spent Per Day", text: "45 minutes" },
              { title: "Average Calories Burnt Per Day", text: "350 calories" },
            ].map((card, index) => (
              <div
                key={index}
                className="col-md-4 mb-4"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)"; // Slightly zoom in
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Soft shadow
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"; // Reset scale
                  e.currentTarget.style.boxShadow = "none"; // Remove shadow
                }}
              >
                <div className="shadow-sm" style={cardStyle}>
                  <h5 style={{ color: "#2d6a4f", fontWeight: "bold" }}>
                    {card.title}
                  </h5>
                  <p style={{ fontSize: "16px", marginTop: "10px" }}>
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <h2 style={{ color: "#2d6a4f" }}>Top Performance</h2>
          <div className="row">
            {[ 
              { title: "Highest Time Spent", text: "2 hours" },
              { title: "Highest Calories Burnt", text: "800 calories" },
              { title: "Average Number of Sets", text: "4 sets" },
            ].map((card, index) => (
              <div
                key={index}
                className="col-md-4 mb-4"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)"; // Slightly zoom in
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Soft shadow
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"; // Reset scale
                  e.currentTarget.style.boxShadow = "none"; // Remove shadow
                }}
              >
                <div className="shadow-sm" style={cardStyle}>
                  <h5 style={{ color: "#2d6a4f", fontWeight: "bold" }}>
                    {card.title}
                  </h5>
                  <p style={{ fontSize: "16px", marginTop: "10px" }}>
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ color: "#2d6a4f" }}>Repetitions Insights</h2>
          <div className="row">
            <div
              className="col-md-4 mb-4"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)"; // Slightly zoom in
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Soft shadow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset scale
                e.currentTarget.style.boxShadow = "none"; // Remove shadow
              }}
            >
              <div className="shadow-sm" style={cardStyle}>
                <h5 style={{ color: "#2d6a4f", fontWeight: "bold" }}>
                  Average Number of Repetitions
                </h5>
                <p style={{ fontSize: "16px", marginTop: "10px" }}>
                  20 repetitions
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Analysis;
