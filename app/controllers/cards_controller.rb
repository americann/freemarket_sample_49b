class CardsController < ApplicationController
 protect_from_forgery except: :payjp ##外部サービスのjs読み込みを許可
 
def index
 @cards = Card.all
end

def new
  @card = Card.new
end

def create
 @card = Card.new(card_params)
 if @card.save
  redirect_to index: :cards
  else
  render :new
  end
end

def payjp ##トークンを取得して保存
  respond_to do |format|
  format.json {
    require 'payjp'
    Payjp.api_key = "pk_test_d7a950435be908a5fbe46bd8"
    if current_user.card
      current_user.card.update(token: params[:token])
     else
      Card.create(token: params[:token],user_id:current_user.id)
    end
    }
end
end

def pay　##支払いの時にトークンと支払い金額をpayjpに渡す
require 'payjp'
product = Product.find(params[:format]).price
Payjp.api_key = "pk_test_d7a950435be908a5fbe46bd8"
charge = Payjp::Charge.create(amount: product, token: current_user.card.token, currency: 'jpy')
end

private
def card_params
  params.require(:card).permit(:card_number, :expiration_date, :security_cord).merge(user_id: current_user.id)
end

end
