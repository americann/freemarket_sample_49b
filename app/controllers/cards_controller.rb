class CardsController < ApplicationController

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

end


private
def card_params
  params.require(:card).permit(:card_number, :expiration_date, :security_cord).merge(user_id: current_user.id)
end

end
