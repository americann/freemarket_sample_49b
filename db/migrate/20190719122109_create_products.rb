class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string          :name
      t.text            :description
      t.string          :state
      t.string          :postage
      t.string          :shipping_date
      t.integer         :price
      t.string          :size
      t.references :user, foreign_key: true
      t.references :prefecture
      t.references :category, foreign_key: true
      t.timestamps
    end
  end
end
