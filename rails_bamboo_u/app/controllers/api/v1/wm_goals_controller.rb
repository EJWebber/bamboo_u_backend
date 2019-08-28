class Api::V1::WmGoalsController < ApplicationController
    
    def index
        render( { json: Api::V1::WmGoalSerializer.new(WmGoal.all) } )
    end

    def show
        render( { json: Api::V1::WmGoalSerializer.new(WmGoal.find(params[:id])) } )
    end

end
