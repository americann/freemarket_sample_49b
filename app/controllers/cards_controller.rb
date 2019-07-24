class CardsController < ApplicationController

def index
end

def new
  @card = Card.new
end

end
