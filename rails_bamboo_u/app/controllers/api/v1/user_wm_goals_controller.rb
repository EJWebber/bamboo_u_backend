class Api::V1::UserWmGoalsController < ApplicationController

    def index
        render( { json: Api::V1::UserWmGoalSerializer.new(UserWmGoal.all) } )
    end

end
