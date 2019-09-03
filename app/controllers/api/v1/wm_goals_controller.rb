class Api::V1::WmGoalsController < ApplicationController
    
    def index
        render json: WmGoal.all, each_serializer: Api::V1::WmGoalSerializer
    end

    # def show
    #     render( { json: Api::V1::WmGoalSerializer.new(WmGoal.find(params[:id])) } )
    # end

end
