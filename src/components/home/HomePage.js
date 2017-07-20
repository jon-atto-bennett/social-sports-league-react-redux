import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../../actions/index'
import TeamList from './TeamList'

class HomePage extends Component {

  render () {
    const {teams} = this.props
    return (
      <div>
        <h2 className='sub-heading'>TEAMS</h2>
        <TeamList teams={teams} />
      </div>
    )
  }
}

HomePage.propTypes = {
  teams: PropTypes.array.isRequired
}

function mapStateToProps (state, ownProps) {
  return { teams: state.teams }
}

function mapDispachToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(HomePage)
