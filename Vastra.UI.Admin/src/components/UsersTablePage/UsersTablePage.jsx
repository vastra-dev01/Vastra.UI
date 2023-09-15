import React from 'react';

import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';

import TableBody from '@mui/material/TableBody';

import TableCell from '@mui/material/TableCell';

import TableContainer from '@mui/material/TableContainer';

import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';

import IconButton from '@mui/material/IconButton';

import EditIcon from '@mui/icons-material/Edit';

import DeleteIcon from '@mui/icons-material/Delete';

 

const UsersTablePage = ({ userData }) => {

  return (

    <div style={{padding: '5px'}}>

      <Typography variant="h5" style={{ marginBottom: '20px' , textAlign:'center'}}>

        Vastra Users

      </Typography>

      <TableContainer component={Paper}>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell>First Name</TableCell>

              <TableCell>Last Name</TableCell>

              <TableCell>Email</TableCell>

              <TableCell>Phone</TableCell>

              <TableCell>Number of Addresses</TableCell>

              <TableCell>Number of Orders</TableCell>

              <TableCell>Role</TableCell>

              <TableCell>Actions</TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {userData.map((user, index) => (

              <TableRow key={index}>

                <TableCell>{user.firstName}</TableCell>

                <TableCell>{user.lastName}</TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>{user.phone}</TableCell>

                <TableCell>{user.numOfAddresses}</TableCell>

                <TableCell>{user.numOfOrders}</TableCell>

                <TableCell>{user.role}</TableCell>

                <TableCell>

                  <IconButton color="primary" aria-label="Edit">

                    <EditIcon />

                  </IconButton>

                  <IconButton color="secondary" aria-label="Delete">

                    <DeleteIcon />

                  </IconButton>

                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>

    </div>

  );

};

 

export default UsersTablePage;