import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Index from './containers/Index';
import Home from './containers/Home';

import Nav from './containers/Nav';
import { autoLoginUser } from './actions/auth.js';

class App extends React.Component {

  componentDidMount = () => {
    this.props.autoLoginUser()
  }

  render(){
    return (
      <div className="App">
        <Nav history={this.props.history} currentUser={this.props.currentUser}/>
        <Route exact path="/" component={Home} />
        <Route path="/index" component={Index} />
        <Route path="/login" render={() => <LoginForm history={this.props.history}/>}/>
        <Route path="/sign-up" render={() => <SignupForm history={this.props.history}/>} />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  autoLoginUser: () => dispatch(autoLoginUser())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
