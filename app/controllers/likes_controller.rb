class LikesController < ApplicationController
  before_action :create_product, only: %i(create destroy)

  def create
    @like = current_user.likes.create(product_id: params[:product_id])
  end

  def destroy
    @like = Like.find_by(product_id: params[:product_id], user_id: current_user.id)
    @like.destroy
  end


  private

  def create_product
    @product = Product.find(params[:product_id])
  end
end
