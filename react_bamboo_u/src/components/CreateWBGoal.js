import React from "react"
import { Dropdown, Input, Label, Button } from 'semantic-ui-react'
import API from '../adapters/API'

class CreateWBGoal extends React.Component{

state={
    activity: null,
    user: this.props.user.id,
    time: null,
    toggleWarning: false
}

    dropdownChange = e => {
        // console.log(this.props.WMGs.filter(goal => goal.activity === e.target.innerText)[0].id)
        this.setState({
            activity: this.props.WBGs.filter(goal => goal.activity === e.target.innerText)[0]?
            this.props.WBGs.filter(goal => goal.activity === e.target.innerText)[0].id
            : this.props.WBGs[0].id
        })
    }

    setTime = e => {
        this.setState({
            time: parseInt(e.target.value)
        })
    }

    handleSubmit = () => {
        this.state.time&&this.state.activity ? this.submitWeeklyGoal() : this.setState({toggleWarning:true})
    }

    submitWeeklyGoal = () => {
        this.setState({toggleWarning:false})
        let goal = {user_id: this.state.user, wb_goal_id: this.state.activity, complete: false, time: this.state.time}
        API.postUserWBG(goal).then(resp => console.log(resp))
    }

    render(){
        
        return(
            <div>
              
                Create a new Weekly Body Goal:
                
                <br />
                <br />
                <Dropdown
                    placeholder='Select Activity'
                    fluid
                    selection
                    options={this.props.WBGs.map(goal => {
                        return {key: goal.id, text: goal.activity, value: goal.id}
                    })}
                    onChange={e => this.dropdownChange(e)}
                />
                <br />
                <Input labelPosition='right' type='text' placeholder='How much time?' >
                <input onChange={e => this.setTime(e)}></ input>
                <Label>minutes</Label>
                </Input>
                <br />
                {this.state.toggleWarning ? <div>Please complete both fields</div>: null}
                <br />
                <Button onClick={this.handleSubmit}>Set Goal</Button>
              
            </div>
        )
    }
}
export default CreateWBGoal