class Api::V1::UserDmGoalsController < ApplicationController

    def index
        render( { json: Api::V1::UserDmGoalSerializer.new(UserDmGoal.all) } )
    end

end
