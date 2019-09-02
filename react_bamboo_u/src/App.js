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
    // {name: "Ed", id: 1}, 
    {error: "Please Login or Sign Up"},
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
    this.setState({toggle: !this.state.toggle})
  }

  addWMGoal = goal => {
    // const date = new Date()
    // const currentDate = `${date.getFullYear()}-${date.getMonth() < 10? `0${date.getMonth()+1}`: date.getMonth()+1}-${date.getDate() < 10 ? `0${date.getDate()}`: date.getDate()}`
    // T${date.getHours() < 10 ? `0${date.getHours()}`: date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes()}:00.000Z
      // const goalDate = {...goal, created_at: currentDate}
        this.setState({ user:  {...this.state.user, user_wm_goals:[...this.state.user.user_wm_goals, goal] }})
        // this.setState({ 
        //   user: [...this.state.user, {user_wm_goals:[...this.state.user.user_wm_goals, goal]} ] 
        // })

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
       <Button.Group>
        <Button >Body</Button>
        <Button onClick={this.toggle}>Home</Button>
        <Button >Mind</Button>
       </Button.Group>
       {this.state.toggle ? 
       <WMGoalContainer WMGs={this.state.WMGs} user={this.state.user} addWMGoal={this.addWMGoal}/>
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
