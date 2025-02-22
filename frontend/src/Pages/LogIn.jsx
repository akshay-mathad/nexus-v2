import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if(username === 'a' && password === 'a'){
      localStorage.setItem('isLoggedIn', true);
      navigate('/home');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <form>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </form>
      <Link to="/signup" onClick={() => alert("Redirecting to sign up page...")}>Don't have an account? Sign up here.</Link>
    </div>
  );
};

export default LogIn;
