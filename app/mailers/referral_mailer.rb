# frozen_string_literal: true

class ReferralMailer < ApplicationMailer
  def invite(to)
    mail(to:, subject: "You've been referred!")
  end
end
