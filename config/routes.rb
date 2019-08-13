Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: 'users/registrations'}
   
  root 'products#index'
  resources  :products do 
    member do
      get'buy_confirmation' 
    end
  end
  resources  :users do
    member do
      get'identification' 
      get'logout'
    end
  end
  resources  :cards do
    collection do 
      post'payjp'
      get'pay'
    end
  end

  resources  :products, only:[:index, :new, :show]
  resources  :users, only:[:index, :show, :edit]
  resources  :cards, only:[:index, :new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
