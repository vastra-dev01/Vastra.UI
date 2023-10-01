import axios from "axios"

const API_URL = "https://localhost:7157/api/authentication"

const login = (phoneNumber, password) => {
    return axios
    .post(API_URL + "/authenticate",{
        phoneNumber,
        password,
    }
    )
    .then((response) => {
        if(response.data.AccessToken){
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
    })
}

const logout = () => {
    localStorage.removeItem("user")
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const authService = {
    login,
    logout,
    getCurrentUser,
}

export default authService