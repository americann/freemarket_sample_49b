class CardsController < ApplicationController

def index
 @cards = Card.all
end

def new
  @card = Card.new
end

def create
  respond_to do |format|
 @card = Card.new(card_number:card_params[:card_number] , expiration_date:card_params[:expiration_date] , user_id: current_user.id)
  if @card.save
   format.html {redirect_to index: :cards}
  else
    flash.now[:alert] = '正しく情報を入力して下さい'
    format.html {render :new}
  end
  format.json {
    require 'payjp'
    Payjp.api_key = "（pk_test_d7a950435be908a5fbe46bd8)"
    current_user.card.update(token: params[:token])
  }
  end
end

private
def card_params
  params.require(:card).permit(:card_number, :expiration_date).merge(user_id: current_user.id)
end

end
