class AddTokenToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :token, :integer
  end
end