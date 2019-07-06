Rails.application.routes.draw do
  devise_for :users
  root 'products#index'
  
  get   'products/show'  =>  'products#show'  

  resources  :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
