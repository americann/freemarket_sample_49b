class AddBuildingNumberToAddresses < ActiveRecord::Migration[5.2]
  def change
    add_column :addresses, :building_number, :string
  end
end
