import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../actions'
import { Link } from 'react-router'
import moment from 'moment'

@connect(
  state => ({
       R_getAllMenu:state.R_getAllMenu,
       R_userInfo:state.R_userInfo
  }),
  dispatch => bindActionCreators(Action, dispatch)
)

 export default class Nodebar extends React.Component {
  constructor () {
    super()
}
 componentWillMount () {
   console.log(this.props.route,"route")
 }
 contextTypes: {
    router: PropTypes.object.isRequired,
}
changeDate=()=>{
     this.props.A_getAllMenu()
}
 componentWillReceiveProps(nextProps) {
     console.log(nextProps,"nextProps")
     if(this.props.R_getAllMenu!=nextProps.R_getAllMenu){
       console.log(121212)
       nextProps.A_userInfo()
     }
   
}
render () {
    console.log(this.props.R_getAllMenu,"R_getAllMenu")
    console.log(this.props.R_userInfo,"R_userInfo")
    
    return (
      <div className="c-topiclist" onClick={this.changeDate}>
          wqwqw12112
      </div>
    )
  }
}

