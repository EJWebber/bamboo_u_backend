class Api::V1::UserWbGoalsController < ApplicationController

    def index
        render json: UserWbGoal.all, each_serializer: Api::V1::UserWbGoalSerializer
    end

    def create
        @goal = UserWbGoal.create(user_wb_goals_params)
        if @goal.valid?
            render json: @goal, serializer: Api::V1::UserWbGoalSerializer
        else
            render json: { error: 'Sorry something went wrong' }
        end
    end

    def show
        @goal=UserWbGoal.find params[:id]
        render json: @goal, serializer: Api::V1::UserWbGoalSerializer
    end

    def update
        @goal = UserWbGoal.find params[:id]
        if @goal.update(complete: params[:complete])
            render json: @goal, serializer: Api::V1::UserWbGoalSerializer
        else
            render json: {error: "Sorry something went wrong"}
        end
    end

    def destroy
        @goal = UserWbGoal.find params[:id]
        @goal.destroy
    end


    private
    def user_wb_goals_params
        params.require(:user_wb_goal).permit(:user_id, :wb_goal_id, :complete, :time)
    end
end
