import React from "react"
import {Button} from "semantic-ui-react"
import API from "../adapters/API"

class DMGoal extends React.Component {
    
    filterForUWMG = () => {
        return this.props.user.user_wm_goals.filter(uwmgoal => uwmgoal.id === this.props.dmg.user_wm_goal_id)[0]
    }

    filterForWMG = () => {
        return this.props.WMGs.filter(wmgoal => wmgoal.id === this.filterForUWMG().wm_goal_id)[0]
    }
    
    render () {
return (
    <div>
        <Button circular icon='check' />
    {this.filterForWMG().activity} today
    </div>
)

    }
}

export default DMGoal