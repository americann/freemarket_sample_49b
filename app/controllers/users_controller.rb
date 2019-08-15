class UsersController < ApplicationController
  def index
    @parent = Category.where(parent_id: nil)
  end
  
  def show
    @parent = Category.where(parent_id: nil)
  end

  def progress
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
