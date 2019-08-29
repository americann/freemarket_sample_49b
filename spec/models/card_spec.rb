require 'rails_helper'

RSpec.describe Card, type: :model do
 
  it 'is invalid with duplicate token' do

  Card.create(
    token:"111aaa",
  )

  card = FactoryBot.build(:card)
  card.valid?
  expect(card.errors[:token]).to include()

  end

end
