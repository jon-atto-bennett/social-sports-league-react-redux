const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[env]
const knex = require('knex')(config)

export default {
  // getTeam: getTeam,
  getTeams,
  getFixtures,
  getTable,
  saveResult
}

function getTeams () {
  return knex('teams').select()
}

function getFixtures () {
  return knex('fixtures').select()
}

function getTable () {
  return knex('teams').select()
}

function saveResult (result) {
  // var id = result.fixture_id
  return knex('fixtures').where('fixture_id', '=', result.fixture_id)
    .update({
      team_1_goals: result.team_1_goals,
      team_2_goals: result.team_2_goals
    })
    // .then(result => {
    //   return knex('fixtures').select()
    //   //  where({fixture_id: id})
    //   // .then(console.lof)
    // })
}
