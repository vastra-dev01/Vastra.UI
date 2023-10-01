import { useEffect, useState } from 'react'
import DashboardPage from './components/DashboardPage/DashboardPage'
import AuthService from './services/auth.service'
import LoginPage from './components/LoginPage/LoginPage'
function App() {
  const [currentUser, setCurrentUser] = useState(undefined)
  useEffect(
    () => {
      const user = AuthService.getCurrentUser()

      if(user){
        setCurrentUser(user)
      }
    }, []
  )
  return (
    <>
      {currentUser?
        (<DashboardPage/>)
        :
        (<LoginPage/>)
      }
    </>
  )
}

export default App
