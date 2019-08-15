class UsersController < ApplicationController
  def index
    @parent = Category.where(parent_id: nil)
  end
  
  def show
    @parent = Category.where(parent_id: nil)
  end

  def exhibit
    @parent = Category.where(parent_id: nil)
  end

  def business
    @parent = Category.where(parent_id: nil)
  end

  def finish
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
