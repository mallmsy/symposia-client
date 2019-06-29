import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import { loginUser, logoutUser } from '../actions/auth';


class Nav extends PureComponent {

  handleClick = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.logoutUser(this.props.history)
  }

  render() {
    return (
      <Menu stackable>
        <Menu.Menu position='right'>
        {this.props.currentUser.username
          ?
          <Menu.Item>
            <Link> <Button circular color='purple' onClick={this.handleClick}>logout</Button> </Link>
          </Menu.Item>
          :
          <>
          <Menu.Item>
            <NavLink to={"/login"}> <Button circular color='blue'>login</Button> </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={"/sign-up"}> <Button circular color='red'>sign up</Button> </NavLink>
          </Menu.Item>
          </>
        }
        </Menu.Menu>
      </Menu>
    );
  }

}
const mapDispatchToProps = dispatch => ({
  logoutUser: (history) => dispatch(logoutUser(history))
})

export default connect(null, mapDispatchToProps)(Nav);
