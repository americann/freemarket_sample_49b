class ProductsController < ApplicationController

  before_action :authenticate_user!,only: :new
  
  def index
  end


  def create
    @product = Product.create(product_params)
  end


  def edit
    @product = Product.find(params[:id])
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


  def update
    product = Product.find(params[:id])
    product.update(product_params) if product.user_id == current_user.id
  end


  def show
    @product = Product.find(params[:id])
  end


  def new
    @product = Product.new
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

  
  private
  def product_params
    params.require(:product).permit(:images, :name, :description, :category_id, :size, :state, :postage, :prefecture_id, :shipping_date, :price, ).merge(user_id: current_user.id)
  end


end

