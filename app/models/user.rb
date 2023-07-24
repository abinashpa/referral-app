# frozen_string_literal: true

class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable,
    :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :referred_users, through: :referrals, source: :referee
  has_many :referrals, foreign_key: :referrer_id

  validates :first_name, :last_name, presence: true
  validates :email, presence: true, length: { maximum: 255 }, uniqueness: true,
    format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  validates :password, presence: true, length: { minimum: 6 }

  def jwt_payload
    super
  end
end
