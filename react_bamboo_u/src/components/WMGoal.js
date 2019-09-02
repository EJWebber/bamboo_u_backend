import React from "react"
// import CreateDMGoal from "./CreateDMGoal"
import {Button} from "semantic-ui-react"
import API from "../adapters/API";

class WMGoal extends React.Component {
    
    state = {
        userWMG : {}
    }
    
    componentDidMount(){
        this.fetchUserWMG()
    }

    fetchUserWMG = () => {
        API.fetchUserWMG(this.props.goal.id).then(resp => this.setState({userWMG: resp}))
    }

    handleClick = () => {
        const dailyGoal = {user_wm_goal_id: this.props.goal.id, complete: false}
        API.postUserDMG(dailyGoal).then(console.log)
    }

    render(){

        const filteredWMGs = this.props.WMGs.filter(wmg => wmg.id === this.props.goal.wm_goal_id)[0]
        // const timeFiltered = filteredWMGs.filter(goal => )
        return(
            <div>
                

                {filteredWMGs.activity} {this.props.goal.number} times this week
                
                
                <Button onClick={this.handleClick}>Get a daily goal</Button>
                
                
            </div>
        )
    }
}
export default WMGoal