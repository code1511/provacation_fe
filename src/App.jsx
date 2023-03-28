import React, { useContext } from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Auth/Login';
import { AuthContext } from './Components/Context/AuthContext';

function App() {
  const { state } = useContext(AuthContext);

  if (!state.isLoggedIn)
    return <Login />;
  else
    return <Home />;

}

export default App;
