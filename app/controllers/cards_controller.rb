class CardsController < ApplicationController

def index
 @cards = Crad.all
end

def new
  @card = Card.new
end

def create
 @card = Card.new(card_number:card_params[:card_number] , expiration_date:card_params[:card_number] , user_id: current_user.id)
  if(@card)
    @card.save
    redirect_to :index
  else
    flash.now[:alert] = '正しく情報を入力して下さい'
    render :new
  end
end

private
def card_params
  params.require(:card).permit(:card_number, :expiration_date).mergr(user_id: current_user.id)
end

end
