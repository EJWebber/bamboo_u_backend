Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

  resources :wb_goals, only: [:index]
  resources :user_wb_goals, only: [:index, :create]
  resources :user_db_goals, only: [:index, :create]

  resources :wm_goals, only: [:index]
  resources :user_wm_goals, only: [:index, :create]
  resources :user_dm_goals, only: [:index, :create]  

  resources :users, only: [:index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    end
  end
end
