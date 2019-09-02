class Api::V1::WbGoalsController < ApplicationController
    
    def index
        render json: WbGoal.all, each_serializer: Api::V1::WbGoalSerializer
    end

    # def show
    #     render( { json: Api::V1::WbGoalSerializer.new(WbGoal.find(params[:id])) } )
    # end

end
