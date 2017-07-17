import teamAPI from '../api/teamAPI'

export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS'

export function fetchTeamsSuccess (teams) {
  return {
    type: FETCH_TEAMS_SUCCESS,
    teams
  }
}

export function loadTeams () {
  return function (dispatch) {
    return teamAPI.getAllTeams().then(teams => {
      dispatch(fetchTeamsSuccess(teams))
    }).catch(error => {
      throw (console.error())
    })
  }
}
