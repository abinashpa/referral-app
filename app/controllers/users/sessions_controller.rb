# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def create
    user = User.find_by(email: params[:user][:email])

    if user&.valid_password?(params[:user][:password])
      sign_in user
      render "create", status: :ok
    else
      render json: { error: t("signin.failure") }, status: :unprocessable_entity
    end
  end

  private

    def respond_to_on_destroy
      jwt_payload = JWT.decode(
        request.headers["X-Auth-Token"].split(" ")[1],
        Rails.application.credentials.fetch(:secret_key_base)
        ).first
      current_user = User.find(jwt_payload["sub"])

      if current_user
        render json: { message: t("signout.success") }, status: :ok
      else
        render json: { error: t("signout.failure") }, status: :unauthorized
      end
    end
end
