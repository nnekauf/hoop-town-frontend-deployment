
const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
    number: "",
    bio: "",
    role: ""
  }
  
 
  const signupForm = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_SIGNUP_FORM":
        return action.formData
      case "RESET_SIGNUP_FORM":
        return initialState
      default:
        return state
    }
  } 
  export default signupForm