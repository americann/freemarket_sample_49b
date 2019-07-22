class AddZipCodeToAddresses < ActiveRecord::Migration[5.2]
  def change
    add_column :addresses, :zip_code, :integer
  end
end
