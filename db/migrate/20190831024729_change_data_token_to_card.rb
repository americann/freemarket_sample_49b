class ChangeDataTokenToCard < ActiveRecord::Migration[5.2]
  def change
    change_column :cards, :token, :text
  end
end
