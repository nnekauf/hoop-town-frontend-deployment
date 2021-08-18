import React from 'react'
import { useHistory } from "react-router-dom";
import PlaceholderLogo from "../images/basketball_team_placeholder_logo.png"
// import SaveButton from "./SaveButton"

const TournamentCard = ({tournament}) => {

  const history = useHistory()

  const handleClick = () => {
      let path = `/tournaments/${tournament.id}`; 
       history.push(path);
  }
 

  return (
    <div className = "tournamentCard"  href={`/tournaments/${tournament.id}`} onClick ={handleClick}>
    
      <img id = "tournamentLogo" src={PlaceholderLogo} /> 
      
      <div className ="tournamentCardText">
      <body>
        <div className = "tournamentTitle">
          <div id="wrapper">
            <div id = "tournamentName"> <h2> {tournament.name}&nbsp;</h2> </div>
            <div className = "tournamentHost"> <h3>  {tournament.host}</h3> </div>
          </div>
        </div>

        <div className = "tournamentInfo">
          <div id="wrapper">
            <div className = "tournamentDateTime"> <h4> {tournament.date_time}</h4> </div>
          </div>
          <div className = "tournamentLocation">
            <div id="wrapper">
                <h4> {tournament.venue} |&nbsp;</h4> <h4>{tournament.city},&nbsp;</h4> <h4>{tournament.state}</h4>
            </div>
          </div>
        </div>
            
        <div className = "tournamentCount">
          <div id="wrapper">
               # of teams |&nbsp;<span style={{ color: '#707070' }}><strong>{tournament.teams.length}</strong></span> 
          </div>
        </div> 
      </body>
      </div>
       
    </div>
  )  

}

 
  export default TournamentCard