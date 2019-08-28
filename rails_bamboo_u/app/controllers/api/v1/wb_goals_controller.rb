class Api::V1::WbGoalsController < ApplicationController
    
    def index
        render( { json: Api::V1::WbGoalSerializer.new(WbGoal.all) } )
    end

    def show
        render( { json: Api::V1::WbGoalSerializer.new(WbGoal.find(params[:id])) } )
    end

end
