import React from 'react'
import { Button, Form } from "semantic-ui-react";

class SignUp extends React.Component{
    state = {
        newName: "",
        newPassword: "",
        name: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    render(){
        return(
        <div>
             <Form onSubmit={() => this.props.fetchUser(this.state.name, this.state.password)} v>
          <Form.Field>
            <label>Name:</label>
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
          </Form.Field>
          <Button type="submit" fluid>Login</Button>
        </Form>

        <div>OR</div>
        
        <Form onSubmit={() => this.props.handleSignUp(this.state.newName, this.state.newPassword)} v>
          <Form.Field>
            <label>Name:</label>
            <input
              type="text"
              placeholder="name"
              value={this.state.newName}
              onChange={this.handleChange}
              name="newName"
            />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              value={this.state.newPassword}
              onChange={this.handleChange}
              name="newPassword"
            />
          </Form.Field>
          <Button type="submit" fluid>Sign Up</Button>
        </Form>

        </div>
        )}
}

export default SignUp