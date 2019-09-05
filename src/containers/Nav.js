import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/auth';
import SlantMeter from '../components/SlantMeter';



class Nav extends PureComponent {

  handleClick = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.logoutUser(this.props.history)
  }

  render() {
    return (
      <div id='nav'>
        <div id='left' className='nav-item'>
          {this.props.currentUser.username
          ?
            <Link to={'/index'}>
              <img
              className='avatar'
              src={'../logo.png'}
              alt='symposia-logo'/>
            </Link>
          :
          <Link to={'/'}>
            <img
            className='avatar'
            src={'../logo.png'}
            alt='symposia-logo'/>
          </Link>
          }
        </div>

        {this.props.currentUser.username
          ?
          <>
            <div id='right' className='nav-item'>
              <Link to={`/profile/${this.props.currentUser.username}`}>
                <img
                className='avatar'
                src={this.props.currentUser.img_url}
                alt={this.props.currentUser.username}/>
              </Link>

              <Link to={'/'}> <button id='nav-btn' className='cute-button' onClick={this.handleClick}>logout</button> </Link>
            </div>
            <SlantMeter slant={this.props.userSlant} />
          </>
          :
          <>
            <div id='right' className='nav-item'>
              <Link to={"/login"}> <button id='nav-btn' className='cute-button'>login</button> </Link>
            </div>
            <div id='right' className='nav-item'>
              <Link to={"/sign-up"}> <button id='nav-btn' className='cute-button'>sign up</button> </Link>
            </div>
            </>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  userSlant: state.users.userSlant
})

const mapDispatchToProps = dispatch => ({
  logoutUser: (history) => dispatch(logoutUser(history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
