class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string          :name
      t.description     :text
      t.state           :string
      t.postage         :string
      t.shopping_date   :string
      t.price           :interger
      t.size            :string
      t.references :user, foreign_key: true
      t.references :prefecture, foreign_key: true
      t.timestamps
    end
  end
end
