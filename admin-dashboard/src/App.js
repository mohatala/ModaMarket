import './App.css';
import React from 'react';
import Login from './Login';
import Home from './Home';

const App = () => {
  const isAuthenticated = localStorage.getItem('isAuth');
  console.log(isAuthenticated);

  return (
    <div className='App'>
	  {isAuthenticated ? <Home /> : <Login />}
	</div>
  );
};

export default App;
