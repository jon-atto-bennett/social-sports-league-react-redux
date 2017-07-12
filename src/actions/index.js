export const FETCH_TEAMS = 'fetch_teams'

export function fetchTeams (teams) {
  return {
    type: FETCH_TEAMS,
    teams
  }
}
