import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Button, Image } from 'semantic-ui-react';
import { logoutUser } from '../actions/auth';
import SlantMeter from '../components/SlantMeter'


class Nav extends PureComponent {

  handleClick = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.logoutUser(this.props.history)
  }

  render() {
    return (
      <Menu stackable>
      <Menu.Item>
      {this.props.currentUser.username
      ?
        <Link to={'/index'}>
          <Image src={"https://cdn0.iconfinder.com/data/icons/white-cat-emoticon-filled/64/cute_cat_kitten_face_avatar-35-512.png"} avatar/>
        </Link>
      :
      <Link to={'/'}>
        <Image src={"https://cdn0.iconfinder.com/data/icons/white-cat-emoticon-filled/64/cute_cat_kitten_face_avatar-35-512.png"} avatar/>
      </Link>
      }
        </Menu.Item>
        <Menu.Menu position='right'>
        {this.props.currentUser.username
          ?
          <>
            <Menu.Item>
              <SlantMeter slant={this.props.userSlant} />
            </Menu.Item>
            <Menu.Item>
              <NavLink to={`/profile/${this.props.currentUser.username}`}>
                <Image src={this.props.currentUser.img_url} avatar/>
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <Link> <Button color='purple' onClick={this.handleClick}>logout</Button> </Link>
            </Menu.Item>
          </>
          :
          <>
          <Menu.Item>
            <NavLink to={"/login"}> <Button color='blue'>login</Button> </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={"/sign-up"}> <Button color='red'>sign up</Button> </NavLink>
          </Menu.Item>
          </>
        }
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  userSlant: state.users.userSlant
})

const mapDispatchToProps = dispatch => ({
  logoutUser: (history) => dispatch(logoutUser(history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
