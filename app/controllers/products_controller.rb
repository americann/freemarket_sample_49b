class ProductsController < ApplicationController
    def index
    end

    def exhibit_new
    @user = User.new
    end


end
