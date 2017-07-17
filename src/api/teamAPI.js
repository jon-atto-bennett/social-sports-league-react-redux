import delay from './delay'

const teams = [{name: 'Hotshots'}, {name: 'Grassroots'}, {name: 'Keepy Up'}, {name: 'Passed It'}, {name: 'Last One Two'}]

class TeamApi {
  static getAllTeams () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], teams))
      }, delay)
    })
  }
}

export default TeamApi
