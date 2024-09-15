import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';


const Register = () => {
  const { login } = useContext(AuthContext); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password); 
  };

  return (
    <div className="flex flex-col text-white  gap-4 p-4 rounded-lg border-2">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
