import React, { useState } from 'react';

import axios from 'axios';

import { redirect } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

 

function LoginPage() {

  const [phoneNumber, setPhoneNumber] = useState('');

  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');

  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

 

  const handleLogin = async () => {

    // Perform validation for phone number and password here

    if (!phoneNumber || !password) {

      alert('Please fill in all fields.');

      return;

    }

 

    try {

const response = await axios.post('/api/login', {

        phoneNumber,

        password,

      });

 

      const jwtToken = response.data.token;

 

      // Store the token in cookies or local storage as needed

      // You can use libraries like js-cookie or localStorage API

      // Example with js-cookie:

      // import Cookies from 'js-cookie';

      // Cookies.set('jwtToken', jwtToken);

 

      setToken(jwtToken);

      setRedirectToDashboard(true);

    } catch (error) {

      console.error('Login failed:', error);

      alert('Login failed. Please try again.');

    }

  };

 

  if (redirectToDashboard) {

    return <redirect to="/dashboard" />;

  }

 

  return (

    <div style={{ textAlign: 'center', marginTop: '10%'}}>

      <Typography variant="h3" gutterBottom>

        Vastra Admin

      </Typography>

      <TextField

        label="Phone Number"

        variant="outlined"

        value={phoneNumber}

        onChange={(e) => setPhoneNumber(e.target.value)}

        style={{ marginBottom: '20px' }}

      />
        <br/>
      <TextField

        type="password"

        label="Password"

        variant="outlined"

        value={password}

        onChange={(e) => setPassword(e.target.value)}

        style={{ marginBottom: '20px' }}

      />
        <br/>

      <Button variant="contained" color="primary" onClick={handleLogin}>

        Login

      </Button>

    </div>

  );

}

 

export default LoginPage;