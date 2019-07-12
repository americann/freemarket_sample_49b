Rails.application.routes.draw do
  devise_for :users
  root 'products#index'
  resources  :products, only:[:index , :new,:show]
  resources  :users, only:[:index ,:show , :edit]
  resources  :cards, only:[:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
