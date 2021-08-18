import React from 'react'
// import { connect } from 'react-redux'



const SearchFilter = () => {    

    // const handleChange = event => {
    //   event.preventDefault()
    //     const { name, value } = event.target
    //     const updatedFormInfo = {
    //         ...formData,
    //         [name]: value
    //       }
    //     updateTournamentForm(updatedFormInfo)
    // }

    // const handleSubmit = event => {
    //     event.preventDefault()
        
    //   }

    return (
      <>
      </>
    )
};

  const mapStateToProps = state => {
    return {
      
      formData: state.tournamentForm,
      
    }
  }
  
//   export default connect(mapStateToProps)(SearchFilter)
export default SearchFilter
