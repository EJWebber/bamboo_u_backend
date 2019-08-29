import React from 'react';
import './App.css';
import API from './adapters/API'
import SignIn from './components/SignIn'
import { Button } from "semantic-ui-react"

class App extends React.Component {
  state={
    user: null
  }

  fetchUser = (name, password) => {
   API.fetchUser().then(users => 
    this.setState({user: users.data.filter(u => u.attributes.name === name)[0].attributes})
   )
  }

  handleSignUp = (newName, newPassword) => {
    API.postUser(
      {name: newName, password: newPassword}
      ).then(u => this.setState(
        {user: u.user.data.attributes}
        )
        )
  }

  logOut = () => {
    this.setState({
      user: null
    })
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
       {!this.state.user?
       <SignIn fetchUser={this.fetchUser} handleSignUp={this.handleSignUp}/>
        : 
       <Button onClick={this.logOut}>Log Out</Button>
       }
      </header>
    </div>
  );
}
}
export default App;
