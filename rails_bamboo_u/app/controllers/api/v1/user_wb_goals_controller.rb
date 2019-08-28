class Api::V1::UserWbGoalsController < ApplicationController

    def index
        render( { json: Api::V1::UserWbGoalSerializer.new(UserWbGoal.all) } )
    end

end
