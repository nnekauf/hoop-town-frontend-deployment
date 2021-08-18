import React from 'react'
import { connect } from 'react-redux'
import TournamentCard from './TournamentCard'
import SearchFilter from './SearchFilter'

const AllTournaments = state => {

  return (
    <>
    <div className="searchBar">
      {SearchFilter}
    </div>
    
    <div className= "allTournaments">
    <br/>
      { state.tournaments.length>0 ?
        <>
          {state.tournaments.map(t => (<TournamentCard tournament = {t} key = {t.id}/>))}
        </>
        :
        <>
          No Tournaments Available
        </>
      }
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    tournaments: state.tournaments
  }
}
export default connect(mapStateToProps)(AllTournaments)
