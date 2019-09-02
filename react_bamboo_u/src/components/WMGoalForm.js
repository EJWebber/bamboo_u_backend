import React from "react"
import { Dropdown, Input, Label, Button } from 'semantic-ui-react'
import API from "../adapters/API"

class WMGoalForm extends React.Component{
   
    state={ activity: null,
    user: this.props.user.id,
    times: null,
    toggleWarning: false
   }

   dropdownChange = e => {
    // console.log(this.props.WMGs.filter(goal => goal.activity === e.target.innerText)[0].id)
    this.setState({
        activity: this.props.WMGs.filter(goal => goal.activity === e.target.innerText)[0]?
        this.props.WMGs.filter(goal => goal.activity === e.target.innerText)[0].id
        : this.props.WMGs[0].id
    })
}

setTimes = e => {
    this.setState({
        times: parseInt(e.target.value)
    })
}

handleSubmit = () => {
    this.state.times&&this.state.activity ? this.submitWeeklyGoal() : this.setState({toggleWarning:true})
}

submitWeeklyGoal = () => {
    this.setState({toggleWarning:false})
    let goal = {user_id: this.state.user, wm_goal_id: this.state.activity, complete: false, number: this.state.times}
    API.postUserWMG(goal).then(resp => this.setState({
        allUserWMGs: [...this.state.allUserWMGs, resp]
    }))
}

    render(){
        return (<div>
            Create a new Weekly Mind Goal: 
            <br />
            <br />
                <Dropdown
                    placeholder='Select Activity'
                    fluid
                    selection
                    options={this.props.WMGs.map(goal => {
                        return {key: goal.id, text: goal.activity, value: goal.id}
                    })}
                    onChange={e => this.dropdownChange(e)}
                />
                <br />
                <Input labelPosition='right' type='text' placeholder='How many times?' >
                <input onChange={e => this.setTimes(e)}></ input>
                <Label>times</Label>
                </Input>
                <br />
                {this.state.toggleWarning ? <div>Please complete both fields</div> : null}
                <br />
                <Button onClick={this.handleSubmit}>Set Goal</Button>
                <br />  
                <br />
                </div>
        )
    }
}

export default WMGoalForm