import React from 'react';
import './App.css';
////
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { autoLoginUser } from './actions/auth.js';
import { fetchPosts } from './actions/posts';

import { Route } from 'react-router-dom'
////
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Index from './containers/Index';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Nav from './containers/Nav';

class App extends React.Component {

  componentDidMount = () => {
    this.props.autoLoginUser()
    this.props.fetchPosts()
  }

  render(){
    return (
      <div className="App">
        <Nav history={this.props.history} currentUser={this.props.currentUser}/>
        <Route exact path="/" component={Home} />
        <Route path="/index" component={Index} />
        <Route path="/login" render={() => <LoginForm history={this.props.history}/>}/>
        <Route path="/sign-up" render={() => <SignupForm history={this.props.history}/>} />
        <Route path={`/profile/${this.props.currentUser.username}`} render={() => <Profile history={this.props.history}/>} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  leftPosts: state.posts.leftPosts
})

const mapDispatchToProps = (dispatch) => ({
  autoLoginUser: () => dispatch(autoLoginUser()),
  fetchPosts: () => dispatch(fetchPosts())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
