module Api
  class Api::RegistrationsController < ApplicationController
    def create
      user = User.new(user_params)
      if user.save
        set_user_cookie(user)
        head :ok
      else
        json_response({ error: user.errors })
      end
    end

    private

    def user_params
      params.require(:user).permit(:email, :username, :password, :password_confirmation)
    end
  end
end