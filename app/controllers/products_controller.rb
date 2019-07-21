class ProductsController < ApplicationController
    def index
    end


    def show
      @product = Product.find(1)
    end

    def new
      @product = Product.new
    end

    def buy_confirmation
      @product = Product.find(params[:id])
      @user = User.find(current_user.id)
    end
end
