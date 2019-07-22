class ProductsController < ApplicationController
    def index
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
end
