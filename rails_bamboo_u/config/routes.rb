Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

  resources :wb_goals
  resources :user_wb_goals
  resources :user_db_goals

  resources :wm_goals
  resources :user_wm_goals
  resources :user_dm_goals  

  resources :users, only: [:index, :create, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    end
  end
end
