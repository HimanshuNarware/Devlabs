import React, { useState } from 'react';
import '../style/Signup.css'; // Import CSS file for styling

export default function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('User cre ated successfully:', data);
        // Handle successful signup (e.g., show success message, redirect, etc.)
      } else {
        console.error('Error creating user:', data);
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{color:"white"}}htmlFor="name">Name:</label>
          <input style={{backgroundColor:"black",color:"white"}}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label style={{color:"white"}} htmlFor="username">Username:</label>
          <input style={{backgroundColor:"black",color:"white"}}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label style={{color:"white"}} htmlFor="password">Password:</label>
          <input style={{backgroundColor:"black",color:"white"}}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-submit">signup</button>
      </form>
    </div>
  );
}


