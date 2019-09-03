class Api::V1::UserWmGoalsController < ApplicationController

    def index
        render json: UserWmGoal.all, each_serializer: Api::V1::UserWmGoalSerializer
    end

    def create
        @goal = UserWmGoal.create(user_wm_goals_params)
        if @goal.valid?
            render json: @goal, serializer: Api::V1::UserWmGoalSerializer
        else
            render json: { error: 'Sorry something went wrong' }
        end
    end

    def show
        @goal=UserWmGoal.find params[:id]
        render json: @goal, serializer: Api::V1::UserWmGoalSerializer
    end


    private
    def user_wm_goals_params
        params.require(:user_wm_goal).permit(:user_id, :wm_goal_id, :complete, :number)
    end
end
