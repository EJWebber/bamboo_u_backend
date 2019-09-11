class Api::V1::UserDbGoalsController < ApplicationController
   
    def index
        render json: UserDbGoal.all, each_serializer: Api::V1::UserDbGoalSerializer
    end

    def create
        @goal = UserDbGoal.create(user_db_goals_params)
        if @goal.valid?
            render json: @goal, serializer: Api::V1::UserDbGoalSerializer
        else
            render json: { error: 'Sorry something went wrong' }
        end
    end

    def show
        @goal=UserDbGoal.find params[:id]
        render json: @goal, serializer: Api::V1::UserDbGoalSerializer
    end

    def update
        @goal = UserDbGoal.find params[:id]
        if @goal.update(complete: params[:complete], time: params[:time])
            render json: @goal, serializer: Api::V1::UserDbGoalSerializer
        else
            render json: { error: 'Sorry something went wrong' }
        end
    end

    def destroy
        @goal = UserDbGoal.find params[:id]
        @goal.destroy
    end


    private
    def user_db_goals_params
        params.require(:user_db_goal).permit(:user_wb_goal_id, :complete, :time)
    end

end
