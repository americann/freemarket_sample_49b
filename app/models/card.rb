class Card < ApplicationRecord
  validates :card_number, null:false
  validates :expiration_date, null:false
  validates :security_cord, null:false

  belongs_to :user
end
