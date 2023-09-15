import React from 'react';

import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom';


import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';

import PersonIcon from '@mui/icons-material/Person';

import CategoryIcon from '@mui/icons-material/Category';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ArchiveIcon from '@mui/icons-material/Archive';

import AddIcon from '@mui/icons-material/Add';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

 

const LandingPage = () => {

  return (

    <Grid container>

      
      {/* Right Side (Add Buttons) */}

      <Grid item xs={12} sm={9}>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

          <Button

            variant="contained"

            color="primary"

            startIcon={<AddIcon />}

            component={Link} to="/addCategory"

            style={{ width: '150px', height: '150px', borderRadius: '10%', marginBottom: '20px' }}

          >

            Add Category

          </Button>

          <Button

            variant="contained"

            color="primary"

            startIcon={<AddIcon />}

            component={Link} to="/addProduct"

            style={{ width: '150px', height: '150px', borderRadius: '10%' }}

          >

            Add Product

          </Button>

        </div>

      </Grid>

    </Grid>

  );

};

 

export default LandingPage;