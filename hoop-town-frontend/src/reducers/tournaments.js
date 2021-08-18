const initialState = []

export default function tournaments(state = initialState, action) {
    switch (action.type) {
      case "ALL":
        return action.tournaments
      case "ADD_TOURNAMENT":
        return state.concat(action.tournament)
    //   case "SELECT_BY_CITY":
    //     return initialState
    //     case "SELECT_BY_DATE":
    //         return null
      default:
        return state
    }
  }