class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.integer :card_number
      t.date :expiration_date
      t.integer :security_cord
      t.timestamps
    end
  end
end
