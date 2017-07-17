import { FETCH_TEAMS_SUCCESS } from '../actions'

// const teams = [{name: 'Hotshots'}, {name: 'Grassroots'}, {name: 'Keepy Up'}, {name: 'Passed It'}, {name: 'Last One'}]

export default function teamsReducer (state = [], action) {
  switch (action.type) {
    case FETCH_TEAMS_SUCCESS:
      return action.teams
    default:
      return state
  }
}
