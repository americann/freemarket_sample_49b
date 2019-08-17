class UsersController < ApplicationController

  def index
  end
  
  def show
  end

  def exhibit   
   @products = Product.where(user_id: current_user.id).limit(5)
  end

  def business
    @products = Product.where(user_id: current_user.id).limit(5)
  end

  def finish
    @products = Product.where(user_id: current_user.id).limit(5)
  end

  def detail
  end

  def edit
  end


  def identification
    @user = User.new
  end


  def logout
    @user = User.new
  end

end
