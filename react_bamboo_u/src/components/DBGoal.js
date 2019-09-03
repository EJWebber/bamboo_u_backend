import React from "react"
import {Button} from "semantic-ui-react"
import API from "../adapters/API"

class DBGoal extends React.Component {
    filterForUWBG = () => {
        return this.props.user.user_wb_goals.filter(uwbgoal => uwbgoal.id === this.props.dbg.user_wb_goal_id)[0]
    }

    filterForWBG = () => {
        return this.props.WBGs.filter(wbgoal => wbgoal.id === this.filterForUWBG().wb_goal_id)[0]
    }

    render () {
        return (
            <div>
                <Button circular icon='check' />
                {this.filterForWBG().activity} today
                
            </div>
        )
    }
}
export default DBGoal