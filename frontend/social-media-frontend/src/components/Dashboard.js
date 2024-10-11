import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Ensure this import is correct
import { Line } from 'react-chartjs-2';  // Ensure this import is correct

const Dashboard = () => {
  const [twitterData, setTwitterData] = useState([]);

  useEffect(() => {
    const fetchTwitterData = async () => {
      const response = await axios.get('http://localhost:5000/api/social/twitter');
      setTwitterData(response.data);
    };
    fetchTwitterData();
  }, []);

  const data = {
    labels: twitterData.map(post => post.createdAt),
    datasets: [
      {
        label: 'Likes',
        data: twitterData.map(post => post.likes),
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'lightblue',
      },
    ],
  };

  return (
    <div className="container">
      <h1>Social Media Analytics Dashboard</h1>
      <Line data={data} />
    </div>
  );
};

export default Dashboard;
