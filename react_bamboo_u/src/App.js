import React from 'react';
import './App.css';

class App extends React.Component {
  state={
    users: []
  }

  fetchUsers = () => {
    return fetch("http://localhost:3000/api/v1/wm_goals")
    .then(resp => resp.json())
    .then(users => console.log(users.data))
  }

  // componentDidMount(){
  //   fetchUsers()
  // }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={this.fetchUsers}>Fetch</button>
  
      </header>
    </div>
  );
}
}
export default App;
