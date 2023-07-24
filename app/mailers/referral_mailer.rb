# frozen_string_literal: true

class ReferralMailer < ApplicationMailer
  def invite(to_email)
    mail(to: to_email, subject: "You've been referred!")
  end
end
