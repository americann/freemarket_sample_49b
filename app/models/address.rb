class Address < ApplicationRecord
  
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :prefecture
  
  belongs_to :user

  validates :zip_code, presence: true
  validates :prefecture_id, presence: true
  validates :city, presence: true
  validates :block, presence: true

end
