import Menu from '../Menu/Menu'
import '../../App.css'
import LandingPage from '../LandingPage/LandingPage'
import Grid from '@mui/material/Grid'
import { BrowserRouter } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import AddCategoryPage from '../AddCategoryPage/AddCategoryPage'
import AddProductPage from '../AddProductPage/AddProductpPage'
import UsersTablePage from '../UsersTablePage/UsersTablePage'


function DashboardPage(){
    return(
        <>
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
                            <Route path='/usersTable' element={<UsersTablePage/>}></Route>
                        </Routes>
                    </Grid>
                </Grid>
            </BrowserRouter>

        </>
    );
}

export default DashboardPage;



