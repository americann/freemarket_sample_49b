class ChangeDataCustomerIdToCard < ActiveRecord::Migration[5.2]
  def change
    change_column :cards, :customer_id, :text
  end
end
