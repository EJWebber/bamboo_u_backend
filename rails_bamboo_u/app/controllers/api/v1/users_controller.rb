class Api::V1::UsersController < ApplicationController
    def index
        render json: User.all, each_serializer: UserSerializer
    end

    # def create
    #     @user = User.create(user_params)
    #     if @user.valid?
    #         render json: { user: Api::V1::UserSerializer.new(@user) }
    #     else
    #         render json: { error: 'Sorry this name is taken' }
    #     end
    # end

    # def show

    #     render( {json: Api::V1::UserSerializer.new(User.find(params[:id])) } )
    # end

    private
    def user_params
        params.require(:user).permit(:name, :password)
    end
end
