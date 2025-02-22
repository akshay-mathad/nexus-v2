import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/home');
  };

  return (
    <div>
      <form>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
      <Link to="/login">Already have an account? Login here.</Link>
    </div>
  );
};

export default SignUp;
