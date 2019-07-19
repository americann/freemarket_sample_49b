class AddFirstnameKanaToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :firstname_kana, :string
  end
end
