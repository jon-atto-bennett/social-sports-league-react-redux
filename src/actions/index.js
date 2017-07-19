import axios from 'axios'

export const fetchTeams = () => {
  const request = axios.get('/teams')
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: 'FETCH_TEAMS',
        teams: data
      })
    })
  }
}
