import React from 'react'
import { connect } from 'react-redux'
import { updateTournamentForm } from '../actions/tournamentForm'
import { createTournament } from '../actions/tournaments'


const NewTournamentForm = ({formData, updateTournamentForm, createTournament, history}) => {    

    const handleChange = event => {
      event.preventDefault()
        const { name, value } = event.target
        const updatedFormInfo = {
            ...formData,
            [name]: value
          }
        updateTournamentForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createTournament(formData, history)
      }

    return (
      <div className= "newTournamentContainer">
        <div className = "title">Create a New Tournament </div> <br/>
        <form className= "newTournamentForm" onSubmit={handleSubmit}>
          <div className = "tournamentDetails">
            
            <div className = "inputBox">
              <input placeholder="name" name="name" onChange={handleChange} value={formData.name} />
            </div>
            <div className = "inputBox"> 
              <input placeholder="host" name="host"  onChange={handleChange}  value={formData.host} />
            </div>
            <div className = "inputBox"> 
              <input placeholder= "Date and time" name="date" type="datetime-local" onChange={handleChange} value={formData.date}/>        
            </div>
            <div className = "inputBox"> 
              <input placeholder="venue" name="venue" onChange={handleChange}   value={formData.venue}/>
            </div>
            <div className = "inputBox"> 
              <input placeholder="street" name="street"   onChange={handleChange}  value={formData.street} />
            </div>
            <div className = "inputBox"> 
              <input placeholder="city" name="city"     onChange={handleChange}    value={formData.city} />            
            </div>

            <div className = "inputBox"> 
              <input placeholder="state" name="state"    onChange={handleChange}   value={formData.state} />
            </div>
            <div className = "inputBox"> 
              <input placeholder="zipcode" name="zipcode" type="text" maxlength="5" onChange={handleChange} value={formData.zipcode} />
            </div>       
            <div className = "inputBox"> 
             <textarea placeholder="about" name="about"   onChange={handleChange}   value={formData.about}
             rows ={10}
             cols ={45} />
            </div>

            <div className = "submitButton"> 
                <input type="submit" value="Create Tournament"/>                         
            </div>
          </div>

        </form>
        </div>
    )
};

  const mapStateToProps = state => {
    return {
      
      formData: state.tournamentForm,
      
    }
  }
  
  export default connect(mapStateToProps, {updateTournamentForm, createTournament})(NewTournamentForm)
