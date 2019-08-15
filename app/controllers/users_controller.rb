class UsersController < ApplicationController
  def index
    @parent = Category.where(parent_id: nil)
  end
  
  def show
    @parent = Category.where(parent_id: nil)
  end

  def exhibit
    @parent = Category.where(parent_id: nil)
    @products = Product.where(user_id: current_user.id).limit(5)
  end

  def business
    @parent = Category.where(parent_id: nil)
    @products = Product.where(user_id: current_user.id).limit(5)
  end

  def finish
    @parent = Category.where(parent_id: nil)
    @products = Product.where(user_id: current_user.id).limit(5)
  end

  def detail
    @parent = Category.where(parent_id: nil)
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
