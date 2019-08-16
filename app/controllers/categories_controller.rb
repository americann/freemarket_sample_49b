class CategoriesController < ApplicationController
  before_action :create_parent_categories, only: %i(index show)
  
  def index
    @categories = Category.where(parent_id: nil)
  end

  def show
    @category = Category.find(params[:id])
    @products = Product.where(category_id: @category.id)
  end
end
