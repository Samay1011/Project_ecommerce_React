
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const allowedEmail = 'Sam10Admin@gmail.com';
  const allowedPassword = 'admin123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === allowedEmail && password === allowedPassword) {
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <pre className="hint">
        For evaluation puropse : <br />
        Email: Sam10Admin@gmail.com <br />
        Password: admin123 <br />
        Only this email is allowed for Admin <br />
        </pre>
        <h2>Admin Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
