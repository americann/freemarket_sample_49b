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

def payjp
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

def pay
end

private
def card_params
  params.require(:card).permit(:card_number, :expiration_date, :security_cord).merge(user_id: current_user.id)
end

end
