# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: Rails.application.credentials.fetch(:smtp_email)
  layout "mailer"
end
