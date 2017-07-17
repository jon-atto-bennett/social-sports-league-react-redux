import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchTeams } from '../actions'

class HomePage extends Component {

  teamRow (team, index) {
    return <div className='teamlist' key={index}>{team.name}</div>
  }

  render () {
    return (
      <div>
        <h2 className='sub-heading'>TEAMS</h2>
        {this.props.teams.map(this.teamRow)}
      </div>
    )
  }
}

HomePage.propTypes = {
  teams: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state, ownProps) {
  return { teams: state.teams }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ fetchTeams }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
