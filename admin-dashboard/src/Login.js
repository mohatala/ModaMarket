import React, { useState } from 'react';
import { UilSignInAlt } from "@iconscout/react-unicons";
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
	if (username === 'admin' && password === 'admin') {
	  localStorage.setItem('isAuth', true);
	  window.location.reload();
	} else {
	  alert('Invalid credentials');
	}
  };
  const handleKeyPress = (e) => {
	if (e.key === 'Enter') {
	  handleLogin();
	}
  };
  return (
    <div className='loginPage'>
      <form className='loginPanel'>
		<h1><span>Moda</span>Market</h1>
      	<h2>Admin Login</h2>
        <label>
          <input
            type="text"
            value={username}
			placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            value={password}
			placeholder="Password"
			onKeyPress={handleKeyPress}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
		  Login
          <UilSignInAlt size="20" />
        </button>
      </form>
    </div>
  );
};

export default Login;
