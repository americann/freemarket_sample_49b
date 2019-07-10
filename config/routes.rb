Rails.application.routes.draw do
  devise_for :users
  root 'products#index'
  resources  :products, only:[:index , :new,:buy_confirmation]
  resources  :products do 
    member do
      get'buy_confirmation' 
    end
  end
  resources  :users, only:[:index ,:show , :edit]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
