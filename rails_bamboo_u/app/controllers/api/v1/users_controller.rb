class Api::V1::UsersController < ApplicationController
    def index
        render( { json: Api::V1::UserSerializer.new(User.all) } )
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            render json: { user: Api::V1::UserSerializer.new(@user) }
        else
            render json: { error: 'failed to create user' }
        end
    end

    private
    def user_params
        params.require(:user).permit(:name, :password)
    end
end
