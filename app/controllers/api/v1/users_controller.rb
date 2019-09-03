class Api::V1::UsersController < ApplicationController
    def index
        render json: User.all, each_serializer: Api::V1::UserSerializer
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            render json: @user, serializer: Api::V1::UserSerializer
        else
            render json: { error: 'Sorry this name is taken' }
        end
    end

    def show
        # render {json: Api::V1::UserSerializer.new(User.find(params[:id]))} 
        user=User.find params[:id]
        render json: user, include: '*.*.*' 

    end

    private
    def user_params
        params.require(:user).permit(:name, :password)
    end
end
