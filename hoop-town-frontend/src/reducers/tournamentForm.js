
const initialState = {
    name: "",
    venue: "",
    date: "",
    host: "",
    about: "",
    street: "",
    city: "",
    state: "",
    zipcode: ""
   
  }
  
 
  const tournamentForm = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_TOURNAMENT_FORM":
        return action.formData
      case "RESET_TOURNAMENT_FORM":
        return initialState
      default:
        return state
    }
  } 
  export default tournamentForm

 