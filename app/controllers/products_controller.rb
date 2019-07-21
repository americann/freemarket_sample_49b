class ProductsController < ApplicationController
    def index
    end


    def show
    end
    

    def new
      @product = Product.new
    end

    def buy_confirmation
      @product = Product.find(params[:id])
      @user = User.find(current_user.id)
    end
end
