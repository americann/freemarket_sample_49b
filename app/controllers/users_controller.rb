class UsersController < ApplicationController

before_action :set_products , only:[:exhibit , :business , :finish]

def new
end
  
def exhibit
end

def index
end

def show
end

def destroy
@product = Product.find(params[:id])
  if @product.destroy
    redirect_to action: 'exhibit'
  else
    redirect_to action: 'exhibit'
  end
end

def business
end

def finish
end

def detail
  @product = Product.find(params[:id])
end

def edit
end

def identification
  
  @user = User.find(current_user.id)
 
end


def update
  @user = User.new(user_params)
  @user = User.find(current_user.id)
  @user.save
end



def logout
  @user = User.new
end

private

def set_products
  @products = Product.where(user_id: current_user.id).limit(5)
end

def user_params
  params.require(:user).permit(:nickname,:firstname,:lastname,:firstname_kana,:lastname_kana,:birthday,:email,:password,
    address_attributes: [:zip_code,:prefecture_id,:city,:block,:building_number,:phone_number]
    )
end

end