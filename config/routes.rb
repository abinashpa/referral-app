# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }

  namespace :api do
    namespace :v1 do
      resources :referrals, only: [:index, :create]
    end
  end

  root to: "home#index"
  get "*path", to: "home#index", via: :all
end
