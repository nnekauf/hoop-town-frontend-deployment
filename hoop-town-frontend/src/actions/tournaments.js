import {resetTournamentForm} from './tournamentForm.js'
//synchronous
export const showAllTournaments = tournaments => {
    return {
        type: "ALL",
        tournaments
    }
}

export const addTournament = tournament => {
    return {
      type: "ADD_TOURNAMENT",
      tournament
    }
  }

// async


export const getAllTournaments = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/tournaments", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify()
        })
        .then (response => response.json())
        .then (r => {
            if (r.error) {
                alert(r.error)
            } else {
                dispatch(showAllTournaments(r))
    
            }
        })
        .catch(console.log)
    }
}

export const createTournament = (formData, history) => {
    
    const body = {
        tournament: {
            name: formData.name,
            venue: formData.venue,
            date_time: formData.date,
            host: formData.host,
            about: formData.about,
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zipcode: formData.zipcode
        }
    }
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/tournaments", {
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
                dispatch(addTournament(r))
                dispatch(resetTournamentForm())
                history.push(`/tournaments/${r.id}`)
            }
        })
        .catch(console.log)
    }
}

