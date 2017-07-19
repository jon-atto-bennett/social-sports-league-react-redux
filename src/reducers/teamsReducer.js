export default function teamsReducer (state = [], action) {
  switch (action.type) {
    case 'FETCH_TEAMS':
      return action.teams
    default:
      return state
  }
}
