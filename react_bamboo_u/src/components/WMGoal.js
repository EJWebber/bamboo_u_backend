import React from "react"
import CreateDMGoal from "./CreateDMGoal"

class WMGoal extends React.Component {
    

    
    render(){

        const filteredWMGs = this.props.WMGs.filter(wmg => wmg.id === this.props.goal.wm_goal_id)[0]
        // const timeFiltered = filteredWMGs.filter(goal => )
        return(
            <div>
                {filteredWMGs.activity}
                {/* {console.log(filteredWMGs.activity)} */}
                {/* {this.props.goal.user_dm_goals.length === 0? <CreateDMGoal /> : null} */}

            </div>
        )
    }
}
export default WMGoal