import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../actions'
import { Link } from 'react-router'
import moment from 'moment'

@connect(
  state => ({
       R_getAllMenu:state.R_getAllMenu,
       R_userInfo:state.R_userInfo,
       R_getAllNew:state.R_getAllNew,
       R_userLogin:state.R_userLogin
       
  }),
  dispatch => bindActionCreators(Action, dispatch)
)

 export default class Nodebar extends React.Component {
  constructor () {
    super()
} 
 componentWillMount () {
     this.props.A_getAllNew(2000)
     this.props.A_userLogin()
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
    // console.log(this.props.R_getAllMenu,"R_getAllMenu")
    // console.log(this.props.R_userInfo,"R_userInfo")
    // console.log(this.props.R_getAllNew,"R_getAllNew")
    let {R_getAllNew} = this.props;
   // console.log(this.props.R_userLogin,"R_userLogin")
    return (
    <div>
        {R_getAllNew.a}
        <div className="c-topiclist" onClick={this.changeDate}>
          wqwqw12112
     </div>
       <div className="c-topiclist" >
       
          wqwqw12112
      </div>
      </div>
    
    )
  }
}

