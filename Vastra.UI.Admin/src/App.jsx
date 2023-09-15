import Menu from './components/Menu/Menu'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './components/LoginPage/LoginPage'
import Grid from '@mui/material/Grid'
import { BrowserRouter } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import AddCategoryPage from './components/AddCategoryPage/AddCategoryPage'
import AddProductPage from './components/AddProductPage/AddProductpPage'
import UsersTablePage from './components/UsersTablePage/UsersTablePage'
function App() {
  

  const userData = [
  
    {
  
      firstName: 'John',
  
      lastName: 'Doe',
  
      email: 'john@example.com',
  
      phone: '123-456-7890',
  
      numOfAddresses: 3,
  
      numOfOrders: 10,
  
      role: 'User',
  
    },
  
    {
  
      firstName: 'Alice',
  
      lastName: 'Smith',
  
      email: 'alice@example.com',
  
      phone: '987-654-3210',
  
      numOfAddresses: 2,
  
      numOfOrders: 5,
  
      role: 'Admin',
  
    },
  
    {
  
      firstName: 'Bob',
  
      lastName: 'Johnson',
  
      email: 'bob@example.com',
  
      phone: '555-555-5555',
  
      numOfAddresses: 1,
  
      numOfOrders: 2,
  
      role: 'User',
  
    },
  
  ];
  
   
  
  
  return (
    <>
      {/* <LoginPage></LoginPage> */}
      <BrowserRouter>
      <Grid container>
      <Grid item xs={12} sm={3}>
        <Menu></Menu>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/addCategory' element={<AddCategoryPage/>}></Route>
          <Route path='/addProduct' element={<AddProductPage/>}></Route>
          <Route path='/usersTable' element={<UsersTablePage userData={userData}/>}></Route>
      </Routes>
      </Grid>
      </Grid>

      </BrowserRouter>
    </>
  )
}

export default App
