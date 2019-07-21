class ProductsController < ApplicationController
    def index
    end


    def show
      @product = Product.find(1).includes(:user)
    end
    

    def new
      @user = User.new
    end

    def buy_confirmation
      @user = User.new
    end
end
