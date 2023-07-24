# frozen_string_literal: true

class CreateReferrals < ActiveRecord::Migration[7.0]
  def change
    create_table :referrals do |t|
      t.string :referred_by, null: false
      t.string :referred_to, null: false
      t.string :message
      t.references :referrer, null: false, foreign_key: { to_table: :users }, null: false, index: true
      t.references :referee, null: false, foreign_key: { to_table: :users }, null: true, index: true
      t.datetime :joined_at
      t.timestamps
    end
  end
end
