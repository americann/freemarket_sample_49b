class AddPhoneNumberToAddresses < ActiveRecord::Migration[5.2]
  def change
    add_column :addresses, :phone_number, :integer
  end
end
