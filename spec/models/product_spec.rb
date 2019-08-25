require 'rails_helper'

RSpec.describe Product, type: :model do

  it 'is invalid without a name' do
    product = FactoryBot.build(:product,name: nil)
    product.valid?
    expect(product.errors[:name]).to include("を入力してください")
  end

  it 'is invalid without a description' do
    product = FactoryBot.build(:product,description: nil)
    product.valid?
    expect(product.errors[:description]).to include("を入力してください")
  end

  it 'returns a result of calculation' do
    user = FactoryBot.create(:user)
    product = FactoryBot.build(:product)
    category = FactoryBot.create(:category)
    
    expect(product.tax).to eq(2160)
  end

  it 'is invalid without a state' do
    product = FactoryBot.build(:product,state: nil)
    product.valid?
    expect(product.errors[:state]).to include("を入力してください")
  end

  it 'is invalid without a postage' do
    product = FactoryBot.build(:product,postage: nil)
    product.valid?
    expect(product.errors[:postage]).to include("を入力してください")
  end

  it 'is invalid without a shipping_date' do
    product = FactoryBot.build(:product,shipping_date: nil)
    product.valid?
    expect(product.errors[:shipping_date]).to include("を入力してください")
  end

  it 'is invalid without a price' do
    product = FactoryBot.build(:product,size: nil)
    product.valid?
    expect(product.errors[:size]).to include("を入力してください")
  end

  it 'is invalid without a prefecture_id' do
    product = FactoryBot.build(:product,prefecture_id: nil)
    product.valid?
    expect(product.errors[:prefecture_id]).to include("を入力してください")
  end

  it 'is invalid without a shipping_method' do
    product = FactoryBot.build(:product,shipping_method: nil)
    product.valid?
    expect(product.errors[:shipping_method]).to include("を入力してください")
  end
  
end
