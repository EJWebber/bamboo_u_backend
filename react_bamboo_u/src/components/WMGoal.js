import React from "react"
import CreateDMGoal from "./CreateDMGoal"

class WMGoal extends React.Component {
    render(){
        return(
            <div>
                {console.log(this.props.WMGs.filter(wmg => wmg.id === this.props.goal.wm_goal_id)[0])}
                <CreateDMGoal />
            </div>
        )
    }
}
export default WMGoal