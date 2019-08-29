class LikesController < ApplicationController
  def create
    @product = Product.find(params[:product_id])
    @like = current_user.likes.create(product_id: params[:product_id])
  end

  def destroy
    @product = Product.find(params[:product_id])
    @like = Like.find_by(product_id: params[:product_id], user_id: current_user.id)
    @like.destroy
  end
end
