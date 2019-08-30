import React from 'react';
import './App.css';
import API from './adapters/API'
import SignIn from './components/SignIn'
import { Button } from "semantic-ui-react"

class App extends React.Component {
  state={
    user: {error: "Please Login or Sign Up"},
    WBGs: [],
    WMGs: []
  }

componentDidMount(){
  this.fetchAllWBGs()
  this.fetchAllWMGs()
}

  fetchAllWBGs = () => {
    API.fetchAllWBGs().then(goals => goals.data.forEach(goal => this.setState({
      WBGs: [...this.state.WBGs, goal.attributes]
    })))
  }

  fetchAllWMGs = () => {
    API.fetchAllWMGs().then(goals => goals.data.forEach(goal => this.setState({
      WMGs: [...this.state.WMGs, goal.attributes]
    })))
  }

  fetchUser = (name, password) => {
   API.fetchUser().then(users => 
    this.setState({user: users.data.filter(u => u.attributes.name === name)})
   )
  }

  handleSignUp = (newName, newPassword) => {
    API.postUser(
      {name: newName, password: newPassword}
      ).then(u => 
        this.setState(
        {user: u}
        )
      )
  }

  logOut = () => {
    this.setState({
      user: {error: "Please Login or Sign Up"}
    })
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
       {this.state.user.error||this.state.user.length===0?
       <SignIn fetchUser={this.fetchUser} handleSignUp={this.handleSignUp} error={this.state.user}/>
        : 
       <Button id="logout" onClick={this.logOut}>Log Out</Button>
       }
      </header>
    </div>
  );
}
}
export default App;
