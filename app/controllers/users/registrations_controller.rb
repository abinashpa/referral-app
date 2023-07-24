# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  before_action :configure_permitted_parameters

  respond_to :json

  private

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name])
    end

    def respond_with(resource, options = {})
      if resource.persisted?
        # write the message from en.yml
        render json: { message: t("signup.success") }, status: :ok
      else
        render json: { errors: resource.errors.full_message }, status: :unprocessable_entity
      end
    end
end
