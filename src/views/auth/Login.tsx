import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';


const LoginPage = () => {
  const { login } = useContext(AuthContext); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password); 
  };

  return (
    <div className="flex flex-col text-black  gap-4 p-4 rounded-lg border-2 items-center">
      <h2 className='font-bold'>Login to use the Rings of Power</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
            className='border-2 p-2 rounded-md'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
        className='border-2 p-2 rounded-md'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="bg-gradient-to-r from-orange-400 to-black text-white p-2 rounded-xl hover:bg-gradient-to-tr font-bold " type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
