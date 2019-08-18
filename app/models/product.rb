class Product < ApplicationRecord   
    belongs_to :user
    extend ActiveHash::Associations::ActiveRecordExtensions
    belongs_to_active_hash :prefecture
    belongs_to :category
    has_many_attached :images

def tax
 self.price*1.08
end

end
