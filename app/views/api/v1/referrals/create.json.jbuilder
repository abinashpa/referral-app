# frozen_string_literal: true

json.message t("referrals.create.success")
json.referral do
  json.id @referral.id
  json.referredBy @referral.referred_by
  json.referredTo @referral.referred_to
  json.invitedAt @referral.created_at
  json.joinedAt @referral.joined_at
  json.message @referral.message
end
