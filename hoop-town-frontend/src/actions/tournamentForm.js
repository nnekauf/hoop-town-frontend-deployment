export const updateTournamentForm = (formData) => {
    return {
      type: "UPDATE_TOURNAMENT_FORM",
      formData
    }
  }

export const resetTournamentForm = () => {
    return {
      type: "RESET_TOURNAMENT_FORM"
    }
  }