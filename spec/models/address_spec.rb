require 'rails_helper'

RSpec.describe Address, type: :model do

  it 'is invalid without a zip_code' do
    address = FactoryBot.build(:address,zip_code: nil)
    address.valid?
    expect(address.errors[:zip_code]).to include("を入力してください")
  end

  it 'is invalid without a prefecture_id' do
    address = FactoryBot.build(:address, prefecture_id: nil)
    address.valid?
    expect(address.errors[:prefecture_id]).to include("を入力してください")
  end

  it 'is invalid without a city' do
    address = FactoryBot.build(:address, city: nil)
    address.valid?
    expect(address.errors[:city]).to include("を入力してください")
  end
  
  it 'is invalid without a block' do
    address = FactoryBot.build(:address, block: nil)
    address.valid?
    expect(address.errors[:block]).to include("を入力してください")
  end

  it 'is valid with zip_code,prefecture_id,city, and block' do
    address = FactoryBot.build(:address)
    expect(address).to be_valid
  end

end
