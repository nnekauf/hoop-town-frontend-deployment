import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
// import { useHistory } from "react-router-dom";



const Login = ({loginFormData, updateLoginForm, login, history}) => {
  
 
  const handleInputChange = event => {
      const { name, value } = event.target
      const updatedFormInfo = {
        ...loginFormData,
        [name]: value
      }
      updateLoginForm(updatedFormInfo)  
  }
    
  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
  }
    
  return (
    <div className= "backgroundBlack">
      <div className="headerTitle">
          Hoop Town
        </div>
      <div className="pageTitle">
        Log In
      </div>
      <form onSubmit={handleSubmit}>
        <input placeholder="username"  value={loginFormData.username} name="username" type="text" onChange={handleInputChange} /><br/>
        <input placeholder="password"  value={loginFormData.password} name="password" type="text" onChange={handleInputChange} /><br/>
        <input type="submit" value="Log In"/>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}
  
export default connect(mapStateToProps, {updateLoginForm, login} )(Login)