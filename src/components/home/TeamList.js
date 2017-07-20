import React from 'react'
import PropTypes from 'prop-types'
import TeamListRow from './TeamListRow'

const TeamList = ({teams}) => {
  return (
    <table className='table'>
      <tbody>
        {teams.map(team =>
          <TeamListRow key={team.team_id} team={team} />
        )}
      </tbody>
    </table>

  )
}

TeamList.propTypes = {
  teams: PropTypes.array.isRequired
}

export default TeamList
