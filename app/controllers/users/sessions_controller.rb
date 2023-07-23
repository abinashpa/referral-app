# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token
  respond_to :json

  private

    def respond_with(resource, options = {})
      render json: { message: "Successfully signed in", data: current_user }, status: :ok
    end

    def respond_to_on_destroy
      jwt_payload = JWT.decode(
        request.headers["X-Auth-Token"].split(" ")[1],
        Rails.application.credentials.fetch(:secret_key_base)).first
      current_user = User.find(jwt_payload["sub"])

      if current_user
        render json: { message: "Successfully signed out" }, status: :ok
      else
        render json: { error: "no active sesstion" }, status: :unauthorized
      end
    end
end
