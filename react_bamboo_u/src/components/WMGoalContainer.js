import React from "react"
import API from '../adapters/API'
import WMGoalForm from "./WMGoalForm"
import WMGoal from "./WMGoal"

class WMGoalContainer extends React.Component{

state={
    // activity: null,
    user: this.props.user.id,
    // times: null,
    // toggleWarning: false,
    allUserWMGs: [],
    formToggle: false
}

componentDidMount(){
    this.fetchAllUserWMGs()
}

fetchAllUserWMGs = () => {
    API.fetchUserWMGs().then(resp => this.setState({
        allUserWMGs: resp.filter(goal => goal.user_id === this.state.user)
    }))
}

    render(){
        
        return(
            <div>
              
                
                {this.state.formToggle ? <WMGoalForm user={this.props.user} WMGs={this.props.WMGs}/> : null}
                
                {this.state.allUserWMGs.map(goal => <div>
                
                 <WMGoal goal={goal} WMGs={this.props.WMGs}/>
                
                </div>
                )}
                
              
            </div>
        )
    }
}
export default WMGoalContainer