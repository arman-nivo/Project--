import React from 'react';
import { Card } from 'react-bootstrap';

const Profile = () => {
  return (
    <Card className="p-4 my-3">
      <h2>Customer Profile</h2>
      <p><strong>Name:</strong> Customer Name</p>
      <p><strong>Email:</strong> customer@example.com</p>
      <p><strong>Address:</strong> 1234 Market St., Dhaka, Bangladesh</p>
    </Card>
     
  );
};

export default Profile;
