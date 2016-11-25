import React, { PropTypes }from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../actions'
import { Link } from 'react-router'
import ContentCompent from '../../components/Content'
class Login extends React.Component {
  constructor () {
    super()
  }

  componentDidMount() {
    console.log(this.props.route)
   }
  componentWillMount () {
   
  }
  render () {
    return (
      <ContentCompent/>
    )
  }
}
const contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

Login.contextTypes = contextTypes;
export default Login