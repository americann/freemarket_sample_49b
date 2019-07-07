Rails.application.routes.draw do
  devise_for :users
  root 'products#index'
  get  'users'   =>  'users#show'
  get  'exhibit_new' =>  'products#exhibit_new'
  resources  :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
