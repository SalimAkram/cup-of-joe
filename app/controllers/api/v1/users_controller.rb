class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user
  before_action :authorize_user

  def show
    user = User.find(params[:id])
    render json: user, serializer: UserSerializer
  end
end



