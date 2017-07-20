import React from 'react'
import PropTypes from 'prop-types'

const TeamListRow = ({team}) => {
  return (
    <tr>
      <td className='teamlist'>{team.name}</td>
    </tr>
  )
}

TeamListRow.propTypes = {
  team: PropTypes.object.isRequired
}

export default TeamListRow
