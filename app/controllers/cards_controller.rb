class CardsController < ApplicationController
 protect_from_forgery except: [:pay,:payjp] ##外部サービスのjs読み込みを許可

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

def payjp ##トークンを取得保存、トークンを活用して顧客を作成して保存
  respond_to do |format|
  format.json {
    require 'payjp'
    Payjp.api_key = ENV['PAYJP_PRIVATE_KEY']
    response_customer = Payjp::Customer.create(card: params[:token])
      if current_user.card
      current_user.card.update(token: params[:token] , customer_id: response_customer.id , user_id:current_user.id)
      else
      Card.create(token: params[:token], customer_id: response_customer.id , user_id:current_user.id)
      end
     @card = current_user.card
    }
  end
end

def pay ##支払いの時にトークンと支払い金額をpayjpに渡す
  if current_user.card
    product = Product.find(params[:id]).price
    customer_id = current_user.card.customer_id
    Payjp.api_key = ENV['PAYJP_PRIVATE_KEY']
    charge = Payjp::Charge.create(amount: product, customer: customer_id, currency: 'jpy')
  else
   render :new
  end
end

private
def card_params
  params.require(:card).permit(:card_number, :expiration_date, :security_cord).merge(user_id: current_user.id)
end

end
