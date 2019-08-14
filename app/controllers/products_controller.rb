class ProductsController < ApplicationController

  # before_action :move_to_index, except: :index
  before_action :authenticate_user!,only: :new
  
  def index
  end

  def create
    @product = Product.create(product_params)
  end

  def show
    @product = Product.find(params[:id])
  end

  def new
    @product = Product.new
    @categories = Category.where(parent_id: nil)
  end

  def buy_confirmation
    @product = Product.find(params[:id])
    @user = User.find(current_user.id)
  end

  # private
  # def move_to_index
  #   redirect_to action: :index unless user_signed_in?
  # end
  private
  def product_params
    params.require(:product).permit(:images, :name,:description, :state, :postage, :prefecture_id, :shipping_date, :price, :category_id).merge(user_id: current_user.id)
  end


end

