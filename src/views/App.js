import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../actions/userActions'

export default class MainLayout extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div className='main-container'>
         <div className="main-wrapper">
          {this.props.children}
        </div>
      </div>
    )
  }
}
