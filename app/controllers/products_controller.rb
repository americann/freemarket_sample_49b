class ProductsController < ApplicationController

  # before_action :move_to_index, except: :index

  def index
  end

  def create
    Product.create(name: params[:name])
  end

  def show
    @product = Product.find(params[:id])
    @user = User.find(params[:id])
  end

  def new
    @product = Product.new

  end

  def buy_confirmation
    @product = Product.find(params[:id])
    @user = User.find(current_user.id)
  end

  # private
  # def move_to_index
  #   redirect_to action: :index unless user_signed_in?
  # end

end

