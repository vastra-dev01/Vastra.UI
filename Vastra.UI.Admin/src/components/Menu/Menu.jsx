import React from 'react';

import { Link } from 'react-router-dom';

import { Paper, Typography, Button } from '@mui/material';

import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';

import PersonIcon from '@mui/icons-material/Person';

import CategoryIcon from '@mui/icons-material/Category';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ArchiveIcon from '@mui/icons-material/Archive';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

 

const Menu = () => {

  return (

    <Paper style={{ padding: '20px', height: '100vh', backgroundColor: '#f0f0f0' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , marginTop:'50px'}}>

        

        <div style={{ textAlign: 'center' }}>

          <PersonIcon fontSize="large" />

          <Typography variant="h6">Admin Name</Typography>

          <Typography variant="body2">Phone: +123456789</Typography>

          <Typography variant="body2">Email: admin@example.com</Typography>

          <Typography variant="body2">Role: Admin</Typography>

        </div>

        <div style={{ marginTop: '50px' }}>


          <Button component={Link} to="/roles" startIcon={<PersonOutlineIcon />} fullWidth>

            Roles

          </Button>

          <Button component={Link} to="/usersTable" startIcon={<PersonIcon />} fullWidth>

            Users

          </Button>

          <Button component={Link} to="/orders" startIcon={<ArchiveIcon />} fullWidth>

            Orders

          </Button>

          <Button component={Link} to="/category" startIcon={<CategoryIcon />} fullWidth>

            Category

          </Button>

          <Button component={Link} to="/products" startIcon={<ShoppingCartIcon />} fullWidth>

            Products

          </Button>

        </div>

        <Button

          variant="contained"

          color="secondary"

          fullWidth

          style={{ marginTop: 'auto' }}

          startIcon={<ExitToAppIcon />}

          // Add the logout handler here

        >

          Logout

        </Button>

      </div>

    </Paper>

  );

};

 

export default Menu;