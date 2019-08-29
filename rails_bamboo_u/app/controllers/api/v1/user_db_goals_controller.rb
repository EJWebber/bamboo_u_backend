class Api::V1::UserDbGoalsController < ApplicationController
   
    def index
        render( { json: Api::V1::UserDbGoalSerializer.new(UserDbGoal.all) } )
    end

end
