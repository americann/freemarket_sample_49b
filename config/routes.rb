Rails.application.routes.draw do
  devise_for :users, controllers: {omniauth_callbacks: 'users/omniauth_callbacks',
    registrations: 'users/registrations'
    }
   
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
      get'exhibit'
      get'business'
      get'finish'
      get'detail'
    end
  end
  resources  :cards do
    collection do 
      post'payjp'
    end
    member do
      post 'pay'
    end
  end

  resources  :categories, only: %i(index show)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
