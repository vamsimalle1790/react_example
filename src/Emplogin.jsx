import React from 'react';
import { useState } from 'react';
import {useHistory } from 'react-router-dom';



export function Emplogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  const handleLogin = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    history.push('/home');
  };
  if (username === '') {
    console.log('Please enter your username and password.');
  } else if (password === '') {
  console.log('Please enter your password.');
  }
  return (
    // <>
    // <form>
    //   <h4>Login</h4>
    //   <label htmlFor="login page">User name</label>
    //   <input type="text" />
    //   <label>Password</label>
    //   <input type='password'/>
    //   <br/>
    //   <input type='submit'/>
    // </form>
    // </>
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin} >Login</button>
    </div>

  )
}

export default Emplogin;