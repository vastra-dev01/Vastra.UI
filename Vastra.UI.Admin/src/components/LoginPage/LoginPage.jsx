import React, { useState } from 'react';

import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import AuthService from '../../services/auth.service';


function LoginPage() {

  const [phoneNumber, setPhoneNumber] = useState('');

  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState(undefined)

  //const navigate = useNavigate();
  const handleLogin = async (e) => {

    // Perform validation for phone number and password here
    e.preventDefault();
    if (!phoneNumber || !password) {

      alert('Please fill in all fields.');

      return;

    }
    try {
      await AuthService.login(phoneNumber, password).then(
        () => {
          //navigate("/dashBoard");
          window.location.reload();
        },
        (error) => {
          setErrorMessage(error.message)
          console.log(error)
        }
      )      
    } catch (err) {
      setErrorMessage(err.Message)
      console.log(err);
    }
  };

 
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

            <Button 
            variant="contained" 
            color="primary" 
            onClick={handleLogin}
            style={{ marginBottom: '20px' }}
            >

              Login

            </Button>
            <br/>
            {errorMessage && 
            <Alert severity="error">{errorMessage}</Alert>
            }
            </div>
  );

}

 

export default LoginPage;