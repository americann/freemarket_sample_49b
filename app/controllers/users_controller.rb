class UsersController < ApplicationController
  
  before_action :set_products , only:[:exhibit , :business , :finish]

def index
end
  
def show
end

def exhibit
  binding.pry
end

def business
end

def finish
end

def detail
  @product = Product.find(params[:id])
end

def edit
end

def identification
  @user = User.new
end

def logout
  @user = User.new
end

private

def set_products
  @products = Product.where(user_id: current_user.id).limit(5)
end
end