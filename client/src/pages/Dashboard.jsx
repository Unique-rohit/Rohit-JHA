import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../assets/dashboard.css'; // Import CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Admin Dashboard</h1>
      <div className="stats">
        <div className="stat-card">
          <h2>Total Users</h2>
          <p>100</p>
        </div>
        <div className="stat-card">
          <h2>Total Posts</h2>
          <p>200</p>
        </div>
        <div className="stat-card">
          <h2>Total Orders</h2>
          <p>50</p>
        </div>
      </div>
      <div className="charts">
        {/* Placeholder for charts */}
        <h2>Charts will go here</h2>
      </div>
      {/* Text as button to go to the home page */}
      <Link to="/home" className="home-link">Home</Link>
    </div>
  );
};

export default Dashboard;
