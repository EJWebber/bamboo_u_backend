class Api::V1::UserDmGoalsController < ApplicationController

    def index
        render json: UserDmGoal.all, each_serializer: Api::V1::UserDmGoalSerializer
    end

    def create
        @goal = UserDmGoal.create(user_dm_goals_params)
        if @goal.valid?
            render json: @goal, serializer: Api::V1::UserDmGoalSerializer
        else
            render json: { error: 'Sorry something went wrong' }
        end
    end


    private
    def user_dm_goals_params
        params.require(:user_dm_goal).permit(:user_wm_goal_id, :complete)
    end

end
