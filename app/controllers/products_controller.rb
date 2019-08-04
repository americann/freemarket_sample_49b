class ProductsController < ApplicationController

  # before_action :move_to_index, except: :index

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
    @parent = Category.where(parent_id: nil)
    @children = []
    @grand_children = []

    respond_to do |format|
      format.html
      format.json do
        if params[:parent_id]
          Category.find(params[:parent_id]).children.each do |child|
            @children << child
          end
        else
          Category.find(params[:child_id]).children.each do |child|
            @grand_children << child
          end
        end
      end
    end
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
    params.require(:product).permit(:name, :description, :category_id, :size, :state, :postage, :prefecture_id, :shipping_date, :price, ).merge(user_id: current_user.id)
  end


end

