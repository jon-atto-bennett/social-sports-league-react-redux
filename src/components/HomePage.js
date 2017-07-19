import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ActionCreators from '../actions/index'
import { fetchTeams } from '../actions'

class HomePage extends Component {

  componentDidMount () {
    this.props.fetchTeams()
  }

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

function mapStateToProps (state) {
  return { teams: state.teams }
}

export default connect(mapStateToProps, { fetchTeams })(HomePage)
