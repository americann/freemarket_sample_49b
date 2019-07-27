class Card < ApplicationRecord
  validates :card_number, presence: true
  validates :expiration_date, presence: true
  validates :security_cord, presence: true

  belongs_to :user
end
