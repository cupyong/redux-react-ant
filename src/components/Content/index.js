import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../actions'
import { Link } from 'react-router'
import moment from 'moment'

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@connect(
  state => ({
       R_getAllMenu:state.R_getAllMenu,
       R_userInfo:state.R_userInfo,
       R_getAllNew:state.R_getAllNew,
       R_userLogin:state.R_userLogin
       
  }),
  dispatch => bindActionCreators(Action, dispatch)
)

export default class MainLayout extends React.Component {
  constructor() {
    super()
    this.state = {
     current: '1',
    }
 }
 componentWillMount () {
     this.props.A_getAllNew(6000)
     this.props.A_userLogin()
   console.log(this.props.route,"route")
 }
  handleClick=(e)=> {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  
  render() {
 let {R_getAllNew} = this.props;
   return (<div>
   <Link to='/' >wqw11111q</Link>
    <div>{R_getAllNew.a}</div>
   </div>
    
     )
   
  }
}

//  return (
//      <Menu onClick={this.handleClick}
//         style={{ width: 240 }}
//         defaultOpenKeys={['sub1']}
//         selectedKeys={[this.state.current]}
//         mode="inline"
//       >
//         <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
//           <MenuItemGroup title="Item 1">
//             <Menu.Item key="1">Option 1</Menu.Item>
//             <Menu.Item key="2">Option 2</Menu.Item>
//           </MenuItemGroup>
//           <MenuItemGroup title="Item 2">
//             <Menu.Item key="3">Option 3</Menu.Item>
//             <Menu.Item key="4">Option 4</Menu.Item>
//           </MenuItemGroup>
//         </SubMenu>
//         <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
//           <Menu.Item key="5">Option 5</Menu.Item>
//           <Menu.Item key="6">Option 6</Menu.Item>
//           <SubMenu key="sub3" title="Submenu">
//             <Menu.Item key="7">Option 7</Menu.Item>
//             <Menu.Item key="8">Option 8</Menu.Item>
//           </SubMenu>
//         </SubMenu>
//         <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
//           <Menu.Item key="9">Option 9</Menu.Item>
//           <Menu.Item key="10">Option 10</Menu.Item>
//           <Menu.Item key="11">Option 11</Menu.Item>
//           <Menu.Item key="12">Option 12</Menu.Item>
//         </SubMenu>
//       </Menu>
//     )

