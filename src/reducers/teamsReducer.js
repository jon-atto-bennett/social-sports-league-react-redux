import { FETCH_TEAMS } from '../actions'

const teams = [{name: 'Hotshots'}, {name: 'Grassroots'}, {name: 'Keepy Up'}, {name: 'Passed It'}, {name: 'Last One'}]

export default function teamsReducer (state = teams, action) {
  switch (action.type) {
    case FETCH_TEAMS:
      return [...state, action.teams]
    default:
      return state
  }
}
