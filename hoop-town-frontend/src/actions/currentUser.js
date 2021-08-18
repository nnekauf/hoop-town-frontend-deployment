
import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getAllTournaments } from "./tournaments.js"

//synchronous
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = user => {
    return {
        type: "CLEAR_CURRENT_USER",
        user
    }
}

// async


export const getCurrentUser = (credentials) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(credentials)
        })
        .then (response => response.json())
        .then (r => {
            if (r.error) {
                alert(r.error)
            } else {
                dispatch(setCurrentUser(r))
                dispatch(getAllTournaments())
                
            }
        })
        .catch(console.log)
    }
}

export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(credentials)
        })
        .then (response => response.json())
        .then (r => {
            if (r.error) {
                alert(r.error)
            } else {
               
                dispatch(setCurrentUser(r))
                
                dispatch(resetLoginForm())
                dispatch(getAllTournaments())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return dispatch => {
         dispatch(clearCurrentUser())
         
        return fetch("http://localhost:3000/api/v1/logout", {
            credentials: "include",
            method: "DELETE",
            
        })
        
    }
}

export const signup = (credentials, history) => {
    
    const body = {
        user: {
            first_name: credentials.firstName,
            last_name: credentials.lastName,
            email: credentials.email,
            username: credentials.username,
            contact_number: parseInt(credentials.number),
            password: credentials.password,
            password_confirmation: credentials.passwordConfirmation,
            bio: credentials.bio,
            role: parseInt(credentials.role)

        }
    }
    
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(body)
        })
        .then (response => response.json())
        .then (r => {
            if (r.error) {
                alert(r.error)
            } else {
        
                dispatch(setCurrentUser(r))
                dispatch(resetSignupForm())
                dispatch(getAllTournaments())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}