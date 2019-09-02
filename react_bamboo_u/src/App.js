import React from 'react';
import './App.css';
import API from './adapters/API'
import SignIn from './components/SignIn'
import WMGoalContainer from './components/WMGoalContainer'
import CreateWBGoal from './components/CreateWBGoal'
import { Button } from "semantic-ui-react"

class App extends React.Component {
  state={
    user: 
    {name: "Ed", id: 1}, 
    // {error: "Please Login or Sign Up"},
    WBGs: [],
    WMGs: [],
    toggle: true
  }

componentDidMount(){
  this.fetchAllWBGs()
  this.fetchAllWMGs()
}

  fetchAllWBGs = () => {
    API.fetchAllWBGs().then(goals => goals.forEach(goal => this.setState({
      WBGs: [...this.state.WBGs, goal]
    })))
  }

  fetchAllWMGs = () => {
    API.fetchAllWMGs().then(goals => goals.forEach(goal => this.setState({
      WMGs: [...this.state.WMGs, goal]
    })))
  }

  fetchUser = (n, password) => {
   API.fetchUser().then(users => 
    this.setState({user:
      users.filter(u => u.name === n).length > 0? users.filter(u => u.name === n)[0] : {error: "User not found"}
      
    })
   )
  }

  handleSignUp = (newName, newPassword) => {
    API.postUser(
      {name: newName, password: newPassword}
      ).then(u => u.error ? 
        this.setState({user: {error: "Name taken"}})
        :
        this.setState({user: u.user})
        )
      
  }

  logOut = () => {
    this.setState({
      user: {error: "Please Login or Sign Up"}
    })
  }

  toggle = () => {
    this.setState({toggle:!this.state.toggle})
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
       {this.state.user.error?
       <SignIn fetchUser={this.fetchUser} handleSignUp={this.handleSignUp} error={this.state.user}/>
        : 
        <div>
       <Button id="logout" onClick={this.logOut}>Log Out</Button>
       <Button onClick={this.toggle}>Goal Type</Button>
       {this.state.toggle ? 
       <WMGoalContainer WMGs={this.state.WMGs} user={this.state.user}/>
        :
       <CreateWBGoal WBGs={this.state.WBGs} user={this.state.user}/>}
       </div>
       }
      </header>
    </div>
  );
}
}
export default App;
