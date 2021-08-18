import React from 'react'



const TournamentShowPage = ({tournament}) => {
 

  return (
      <div className="tournamentShowPage"> <br/> <br/>
        
        <div className = "showPageCard">
          <h2> {tournament.name} TOURNAMENT</h2> <h3> HOSTED BY: {tournament.host}</h3>
          <br/>
          <h4>LOCATION: {tournament.venue} {tournament.city}, {tournament.state} {tournament.zipcode}</h4>
          
          <h4>TIME: {tournament.date_time}</h4>
          
          
          <br/>
          
          <h4> ABOUT THIS TOURNAMENT</h4>
          <p> {tournament.about}</p>
          <h4> # of teams | {tournament.teams.length}</h4> 

        </div>

      </div>
  )  

}

 
  export default TournamentShowPage



   