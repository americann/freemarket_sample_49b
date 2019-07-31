class AddCustomerIdToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :customer_id, :integer
    add_column :cards, :card_id , :integer
  end
end
