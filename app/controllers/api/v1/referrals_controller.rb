# frozen_string_literal: true

class Api::V1::ReferralsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    @referrals = Referral.all
    render "index"
  end

  def create
    @referral = Referral.new(referral_params)
    @referral.referrer_id = current_user.id
    @referral.referred_by = current_user.email
    if @referral.save
      render "create"
    else
      render json: { errors: @referral.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

    def referral_params
      params.require(:referral).permit(:referred_to, :message)
    end
end
