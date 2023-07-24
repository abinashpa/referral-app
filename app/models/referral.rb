# frozen_string_literal: true

class Referral < ApplicationRecord
  has_one :referee, class_name: "User", foreign_key: :referrer_id
  has_one :referrer, class_name: "User", foreign_key: :referee_id

  validates :referrer_id, presence: true
  validates :referred_by, :referred_to, presence: true
  validate :already_referred

  after_create :send_referral_email

  def already_referred
    if Referral.where(referrer_id: self.referrer_id, referred_to: self.referred_to).exists?
      errors.add(:base, "You have already referred this user")
    end
  end

  private

    def send_referral_email
      ReferralMailer.invite(self.referred_to).deliver_now
    end
end
